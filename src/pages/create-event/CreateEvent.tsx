import { Input } from '../../components/input/Input'

interface CreateEventProps {
    interest: string
}

export function CreateEvent({ interest }: CreateEventProps) {
    return (
        <div className='h-full'>
            <div style={{ height: 50 }}></div>
            <div
                className='bg-white bg-opacity-10 h-full flex items-center flex-col'
                style={{ width: '100%' }}
            >
                <h1 className='text-xl my-4'>Host an event</h1>
                <div className='w-80'>
                    <p className='mb-3'>Interest: {interest}Music</p>

                    <form action=''>
                        <div className='mb-3'>
                            <Input fieldName='Event Name' name='event-name' />
                        </div>
                        <div className='mb-3'>
                            <Input fieldName='Venue' name='venue' />
                        </div>
                        <div className='mb-3'>
                            <Input fieldName='Description' name='description' />
                        </div>

                        <input
                            type='submit'
                            value='Create Event'
                            className='w-full py-2 rounded-sm mt-4'
                            style={{
                                background:
                                    'linear-gradient(90.7deg, rgba(255, 209, 250, 0.92) 5.75%, rgba(194, 226, 255, 0.94) 95.45%)',
                                boxShadow:
                                    '4px 4px 4px rgba(0, 0, 0, 0.06), -4px 0px 4px rgba(0, 0, 0, 0.06)',
                            }}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}
