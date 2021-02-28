import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { NavBar } from '../components'
import { List } from '../routes'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/list" />
                </Route>
                <Route path="/list" exact component={List} />
            </Switch>
        </Router>
    )
}

export default App