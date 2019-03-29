import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Segment, Image, Header, Divider, Button } from 'semantic-ui-react';

class ProfileView extends React.Component {
  state = { profile: {}, }

  componentDidMount() {
    axios.get(`/api/profiles/${this.props.match.params.id}`)
      .then( res => {
        this.setProfile(res.data)
    })
  }

  setProfile = (data) => {
    this.setState({ profile: data })
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

export default ProfileView