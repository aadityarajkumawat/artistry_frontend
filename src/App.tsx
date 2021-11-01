import { Fragment, useCallback, useEffect, useState } from 'react'
import { RouteComponentProps, StaticContext, useLocation } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { useQuery } from 'urql'
import { Navbar } from './components/navbar/Navbar'
import { ME } from './graphql/me'
import { CreateEvent } from './pages/create-event/CreateEvent'
import { EventCreated } from './pages/event-created/EventCreated'
import { Events } from './pages/events/Events'
import { Home } from './pages/home/Home'
import { Invites } from './pages/invites/Invites'
import { Login } from './pages/login/Login'
import { Profile } from './pages/profile/Profile'
import { Register } from './pages/register/Register'

interface PrivateRouteProps {
    exact: boolean
    path: string
    component:
        | React.ComponentType<any>
        | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>
}

function PrivateRoute({ component, exact, path }: PrivateRouteProps) {
    const [userResponse] = useQuery({ query: ME })

    return (
        <Fragment>
            {!userResponse.fetching && (
                <Fragment>
                    {userResponse.data.me.user &&
                    userResponse.data.me.user.id !== null ? (
                        <Route exact path={path} component={component} />
                    ) : (
                        <div className='mt-32 text-center'>
                            You are not logged in
                        </div>
                    )}
                </Fragment>
            )}
        </Fragment>
    )
}

function App() {
    const location = useLocation()
    const [show, setShow] = useState<boolean>(false)
    const authRoutes = useCallback(() => ['/login', '/register'], [])

    useEffect(() => {
        setShow(!authRoutes().includes(location.pathname))
    }, [location.pathname, authRoutes])

    return (
        <div className='App'>
            {show && <Navbar />}
            <Switch>
                <Route exact path='/' component={Home} />
                <PrivateRoute
                    exact
                    path='/create-event'
                    component={CreateEvent}
                />
                <Route exact path='/events' component={Events} />
                <PrivateRoute exact path='/invites' component={Invites} />
                <PrivateRoute exact path='/profile' component={Profile} />
                <PrivateRoute
                    exact
                    path='/event-created'
                    component={EventCreated}
                />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </div>
    )
}

export default App
