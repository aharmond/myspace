import React, { Fragment, } from 'react';
import axios from 'axios';
import { Link, } from 'react-router-dom';
import { ProfileConsumer, } from '../providers/ProfileProvider';
import { Segment, Header, Divider, Image, Button, } from 'semantic-ui-react';

class ProfileIndex extends React.Component {
  state = { profiles: [], }

  componentDidMount() {
    axios.get(`/api/profiles`)
      .then( res => {
        this.setState({ profiles: res.data })
      })
  }

  render() {
    const { profiles } = this.state

    return (
      <>
        {profiles.map ( p => (
          <Fragment key={p.id}>
            <Segment>
              <Image src={p.avatar} />
              <Header>{p.firstName} {p.lastName}</Header>
              <Button as={Link} to={`/profile/${p.id}`} content='View Profile' id={p.id} />
            </Segment>
            <Divider/>
          </Fragment>
          )
        )}
      </>
    )
  }
}

export default class ConnectedProfileIndex extends React.Component {

  render() {
    return (
      <ProfileConsumer>
        { value => <ProfileIndex {...this.props} value={value} />}
      </ProfileConsumer>
    )
  }
}