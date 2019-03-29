import React from 'react';
import { AuthConsumer, } from '../providers/AuthProvider';
import { Menu, } from 'semantic-ui-react';
import { Link, withRouter, } from 'react-router-dom';

class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;

    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            as={Link}
            to='/login'
            id='login'
            name='login'
            active={location.pathname === '/login'}
          />
          <Menu.Item
            as={Link}
            to='/register'
            id='register'
            name='register'
            active={location.pathname === '/register'}
          />
        </Menu.Menu>
      )
    }
  }

  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item
          as={Link}
          to='/'
          id='home'
          name='home'
          active={this.props.location.pathname === '/'}
        />
        <Menu.Item
          as={Link}
          to='/profile/index'
          id='profileindex'
          name='Profile Index'
          active={this.props.location.pathname === '/profile/index'}
        />
        {this.rightNavItems() }
      </Menu>
    )
  }
}

class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth =>
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);