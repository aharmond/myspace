import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, } from 'semantic-ui-react';

const NoMatch = () => (
  <Header as={Link} to='/' size='medium' textAlign='center'>
    Nothing to see here...return Home.
  </Header>
)

export default NoMatch;