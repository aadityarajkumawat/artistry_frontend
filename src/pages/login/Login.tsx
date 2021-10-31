import React, { useState } from 'react'
import ArtistryLogo from '../../assets/Icon.svg'
import { Input } from '../../components/input/Input'
import { Link } from 'react-router-dom'
import { useMutation } from 'urql'
import { LOGIN } from '../../graphql/login'
import { useHistory } from 'react-router'

interface LoginForm {
    email: string
    password: string
}

export function Login() {
    const [loginForm, setLoginForm] = useState<LoginForm>({} as LoginForm)
    const { email, password } = loginForm
    const router = useHistory()

    const [, loginUser] = useMutation<any, LoginForm>(LOGIN)

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        let { name, value } = e.target
        setLoginForm((lf) => ({ ...lf, [name]: value }))
    }

    return (
        <div className='flex justify-center items-center text-grey1 flex-col h-screen'>
            <div className='text-center'>
                <div className='flex items-center justify-center'>
                    <img
                        src={ArtistryLogo}
                        alt=''
                        style={{ width: 50 }}
                        className='mr-2'
                    />
                    <p className='font-bold text-xl'>Artistry</p>
                </div>
                <p className='mt-3'>A brief description about artistry</p>
            </div>
            <form
                className='my-6 w-80'
                onSubmit={async (e) => {
                    e.preventDefault()
                    const res = await loginUser({ ...loginForm })
                    if (res.data && res.data.login && res.data.login.user.id) {
                        router.push('/')
                    }
                }}
            >
                <div className='mb-1'>
                    <Input
                        fieldName='Email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={email}
                    />
                </div>
                <div className='mb-1'>
                    <Input
                        fieldName='Password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={password}
                    />
                </div>
                <div>
                    <input
                        type='submit'
                        value='Login'
                        className='w-full py-2 rounded-sm mt-4'
                        style={{
                            background:
                                'linear-gradient(90.7deg, rgba(255, 209, 250, 0.92) 5.75%, rgba(194, 226, 255, 0.94) 95.45%)',
                            boxShadow:
                                '4px 4px 4px rgba(0, 0, 0, 0.06), -4px 0px 4px rgba(0, 0, 0, 0.06)',
                        }}
                    />
                </div>
            </form>
            <p>
                New to artistry?{' '}
                <Link to='/register'>
                    <span style={{ color: '#7F7DFF' }}>Create an account</span>
                </Link>
            </p>
        </div>
    )
}
