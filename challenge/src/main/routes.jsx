import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Patient from '../patient/patient'
import About from '../about/about'
import List from '../patient/patientList'

export default props => (
    <Router history={hashHistory}>
        <Route path='/cadastrar' component={Patient} />
        <Route path="/edit/:email" component={Patient} />
        <Route path='/list' component={List} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/list' />
    </Router>
)