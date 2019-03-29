import React from 'react';
import { Form, Button, Header } from 'form';
import axios from 'axios';

class PostForm extends React.Component {
  state = { title: '', date: '', body: '' }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    const { title, date, body, } = this.state

    return (
      <>
        <Header size='huge' textAlign='center' content='New Post' />
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            name='title'
            label='Title'
            value={title}
            autoFocus
            required
            onChange={this.handleChange()}
          />
          <Form.Input
            name='date'
            label='Date'
            value={date}
            required
            onChange={this.handleChange()}
          />
          <Form.Input
            name='body'
            label='Body'
            value={body}
            required
            onChange={this.handleChange()}
          />
          <Form.Button color="green" content="Submit" />
        </Form>
        <Button/>
      </>
    )
  }
}

export default PostForm;