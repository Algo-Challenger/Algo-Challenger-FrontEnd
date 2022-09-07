import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    let completedChallenges = this.props.profile.challengesInitialized.filter( (challenge, i) => {
        return challenge.hasCompleted === true;
    })

    return (
      <>
        <h1>Hey, {this.props.profile.name}!</h1>
        <div>
          <h2>Completed Challenges</h2>
          <ul>
          {
            completedChallenges && completedChallenges.map((challenge, i) => {
              return <li key={challenge.challengeId}>
                    <Link to={`/challenge/${challenge.challengeName}`}
                          style={{ display: "block", margin: "1rem 0" }}>{challenge.challengeName}</Link>
              </li>
            })
          }
          </ul>
        </div>
        <div>
          <h3>Current Score:</h3>
          <h3>{this.props.profile.score}</h3>
        </div>
      </>
    )
  }
}

export default Profile;