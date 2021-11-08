import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom'
import CharactersList from './components/CharactersList'
import CharacterDetails from './components/CharacterDetails'
import NavBar from '../ui-components/NavBar'

const AppRouter = () => {
    return (
        <Router>
            <NavBar/>
            <Switch>
                <Route path="/" exact render={() => <Redirect to="/characters" />} />
                <Route path="/characters" component={CharactersList} />
                <Route path="/characters/:id" component={CharacterDetails} />
            </Switch>
        </Router>
    )
}

export default AppRouter;