import React from 'react';
import { ProfileConsumer, } from '../providers/ProfileProvider';
import { Header, Form, Segment, Button, } from 'semantic-ui-react';

class ProfileForm extends React.Component {
  state = { firstName: "", lastName: "", birthdate: "", }

  handleChange = (e) => {
    const { name, value, } = e.target
    this.setState({ [name]: value, });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const profile = this.state
    this.props.value.createProfile(profile, this.props.history);
  }

  render() {
    const { firstName, lastName, birthdate, } = this.state
    
    return (
      <Segment basic>
        <Header size='huge' textAlign='center'>Finish Profile</Header>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Input
              label='First Name'
              autoFocus
              required
              name='firstName'
              value={firstName}
              onChange={this.handleChange}
              width={6}
            />
            <Form.Input
              label='Last Name'
              required
              name='lastName'
              value={lastName}
              onChange={this.handleChange}
              width={6}
            />
            <Form.Input
              label='Birthdate'
              required
              name='birthdate'
              value={birthdate}
              onChange={this.handleChange}
              width={4}
            />
          </Form.Group>
          <Segment textAlign="center" basic>
            <Button primary type='submit' content='Submit' />
          </Segment>
        </Form>
      </Segment>
    )
  }
}

export default class ConnectedProfileForm extends React.Component {
  render() {
    return (
      <ProfileConsumer>
        { value => <ProfileForm { ...this.props } value={value} />}
      </ProfileConsumer>
    )
  }
}