import React from "react";

class Profile extends React.Component {
  render() {
    return (
      <h1>{this.props.profile.name}</h1>
    )
  }
}

export default Profile;