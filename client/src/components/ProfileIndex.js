import React from 'react';
import { Link, } from 'react-router-dom';
import { ProfileConsumer, } from '../providers/ProfileProvider';
import { Segment, Header, Divider, Image, Button, } from 'semantic-ui-react';

const ProfileIndex = () => (
  <>
    {this.props.profiles.map ( p => (
      <>
        <Segment key={p.id}>
          <Image src={p.avatar} />
          <Header>{p.firstName} {p.lastName}</Header>
          <Button as={Link} to='profile/:id' content='View Profile' />
        </Segment>
        <Divider/>
      </>
      )
    )}
  </>
)

export default class ConnectedProfileIndex extends React.Component {
  render() {
    return (
      <ProfileConsumer>
        { value => <ProfileIndex {...this.props} value={value} />}
      </ProfileConsumer>
    )
  }
}