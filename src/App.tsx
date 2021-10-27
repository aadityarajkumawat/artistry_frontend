import { useHistory } from 'react-router'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from './components/navbar/Navbar'
import { CreateEvent } from './pages/create-event/CreateEvent'
import { Home } from './pages/home/Home'

function App() {
    const router = useHistory()
    return (
        <div className='App'>
            {router.location.pathname !== '/login' && <Navbar />}
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/create-event' component={CreateEvent} />
            </Switch>
        </div>
    )
}

export default App
