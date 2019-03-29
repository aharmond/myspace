import React from 'react';
import axios from 'axios';
import ProfileForm from './ProfileForm';
import { Link, } from 'react-router-dom';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Header, Button } from 'semantic-ui-react';

class Home extends React.Component {
  state = { profile: {}, }

  componentDidMount() {
    axios.get(`/api/users/${this.props.auth.user.id}/profiles`)
      .then( res => {
        this.setProfile(...res.data)
    })
  }

  setProfile = (data) => {
    this.setState({ profile: data })
  }

  render() {
    return (
      <>
        { this.state.profile ? 
          <>
            <Header size="huge" textAlign='center'>Welcome to Myspace</Header>
            <Button as={Link} to='/profile' content='Profile'/>
          </>
        :
          <ProfileForm user_id={this.props.auth.user.id} />
        }
      </>
    )
  }
}

export default class ConnectedHome extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Home {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}