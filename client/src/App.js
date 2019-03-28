import React from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import ProfileForm from './components/ProfileForm';
import ProfileView from './components/ProfileView';
import ProfileIndex from './components/ProfileIndex';
import Login from './components/Login';
import Register from './components/Register';
import FetchUser from './components/FetchUser';
import ProtectedRoute from './components/ProtectedRoute';
import { Switch, Route, } from 'react-router-dom';
import { Container, } from 'semantic-ui-react';

const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <ProtectedRoute exact path='/' component={Home} />
          <ProtectedRoute exact path='/profile' component={Profile} />
          <ProtectedRoute exact path='/profile/new' component={ProfileForm} />
          <ProtectedRoute exact path='/profile/index' component={ProfileIndex} />
          <ProtectedRoute exact path='/profile/:id' component={ProfileView} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </>
)

export default App;