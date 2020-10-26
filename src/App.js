import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './components/PrivateRoute/Index'

import LoginIndex from './pages/Auth/Login'
import RegisterIndex from './pages/Auth/Register'
import AdminMaster from './pages/Admin/Master'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LoginIndex} />
          <Route exact path="/register" component={RegisterIndex} />

          <PrivateRoute>
            <Route path="/admin" component={AdminMaster} />
          </PrivateRoute>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
