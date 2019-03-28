import React from 'react';
import { Link, } from 'react-router-dom';
import { ProfileConsumer, } from '../providers/ProfileProvider';
import { Segment, Header, Divider, Image, Button, } from 'semantic-ui-react';

class Profile extends React.Component {

  componentDidMount() {
    this.props.getProfile(this.props.profile.id)
  }

  render() {
    const { firstName, lastName, birthdate, avatar } = this.state.profile

    return (
      <>
        <Segment textAlign='center'>
          <Image src={avatar} />
          <Header  size='large' content={`${firstName} ${lastName}`} />
          <Header size='small' content={birthdate} />
        </Segment>
        <Divider />
        <Button as={Link} to='/profile/index' content='See profiles' />
      </>
    )
  }
}

export default class ConnectedProfile extends React.Component {
  render() {
    return (
      <ProfileConsumer>
        { value => <Profile { ...this.props } value={value} />}
      </ProfileConsumer>
    )
  }
}