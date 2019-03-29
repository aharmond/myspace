import React from 'react';
import axios from 'axios';

const ProfileContext = React.createContext();
export const ProfileConsumer = ProfileContext.Consumer;

export class ProfileProvider extends React.Component {
  state = { profile: [], profiles: [], };

  createProfile = ( profile, history, user_id ) => {
    profile = {...profile, avatar: `https://robohash.org/${profile.lastName}`}
    axios.post(`/api/users/${user_id}/profiles`, profile)
      .then( res => {
        this.setState({ profile: res.data })
        history.push('/profile');
      })
      .catch( res => {
        console.log(res)
      })
  }

  getProfiles = () => {
    axios.get(`/api/profiles`)
      .then( res => {
        this.setState({ profiles: res.data })
      })
      .catch( res => {
        console.log(res)
      })
  }

  updateProfile = (profile, history) => {
    axios.put(`/api/profiles/${profile.id}`, profile)
      .then( res => {
        this.setState({ profile: res.data })
        history.push('/profile');
      })
    .catch( res => {
      console.log(res)
    })
  }

  render() {
    return (
      <ProfileContext.Provider value={{
        ...this.state,
        createProfile: this.createProfile,
        getProfile: this.getProfile,
        getProfiles: this.getProfiles,
        updateProfile: this.updateProfile,
      }}>
        { this.props.children }
      </ProfileContext.Provider>
    )
  }
};