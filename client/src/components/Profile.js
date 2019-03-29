import React from 'react';
import { Link, } from 'react-router-dom';
import axios from 'axios';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Segment, Header, Divider, Image, Button, } from 'semantic-ui-react';

class Profile extends React.Component {
  state = { profile: {}, showPost: false }

  componentDidMount() {
    axios.get(`/api/users/${this.props.auth.user.id}/profiles`)
      .then( res => {
        this.setProfile(...res.data)
    })
  }

  setProfile = (data) => {
    this.setState({ profile: data })
  }

  togglePost = () => this.setState({ showPost: !this.state.showPost })

  render() {
    const { firstName, lastName, birthdate, avatar } = this.state.profile

    return (
      <>
        <Segment textAlign='center' floated='left'>
          <Image src={avatar} />
          <Header  size='large' content={`${firstName} ${lastName}`} />
          <Header size='small' content={birthdate} />
        <Button onClick={this.togglePost} color="green" content="New Post"/>
        </Segment>
        <Divider />
        <Button as={Link} to='/profile/index' content='See profiles' floated="right"/>
      </>
    )
  }
}

export default class ConnectedProfile extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Profile { ...this.props } auth={auth} />}
      </AuthConsumer>
    )
  }
}