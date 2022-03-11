import React from "react"
import { Container } from '@mui/material'
import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import PrivateRoute from "./router/PrivateRoute"
import ForgotPassword from "./pages/ForgotPassword"
import UpdateProfile from "./pages/UpdateProfile"
import { ThemeProvider } from '@mui/material';
import theme from './components/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/update-profile' component={UpdateProfile} />
            <Route path='/signup' component={Signup} />
            <Route path='/login' component={Login} />
            <Route path='/forgot-password' component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  )
}

export default App
