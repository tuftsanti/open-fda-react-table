import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import { NavBar } from '../components'
import { List, Create, Edit, View } from '../routes'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Redirect to="/oils/list" />
                </Route>
                <Route path="/oils/list" exact component={List} />
                <Route path="/oils/create" exact component={Create} />
                <Route
                    path="/oils/edit/:id"
                    exact
                    component={Edit}
                />
                <Route
                    path="/oils/:id"
                    exact
                    component={View}
                />
            </Switch>
        </Router>
    )
}

export default App
