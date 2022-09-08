import React from "react";
import { Link } from "react-router-dom";

class Profile extends React.Component {
  render() {
    let completedChallenges = this.props.profile.challengesInitialized.filter( (challenge, i) => {
        return challenge.hasCompleted === true;
    })

    const profileStyle = {
      width: "80%",
      marginTop: "3rem",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexDirection: "column"
    }

    const headerStyle = {
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: "1rem",
      marginBottom: "2rem",
      fontSize: "2rem"
    }

    const bodyStyle = {
      display: "flex",
      flexDirection: "column"
    }

    const challengeList = {
      background: "rgba( 255, 255, 255, 0.15 )",
			boxShadow: "0 8px 32px 0 rgba( 200, 200, 220, 0.18 )",
			backdropFilter: "blur( 5px )",
			borderRadius: "10px",
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexDirection: "column",
      padding: "1rem"
    }

    const scoreBox = {
      background: "rgba( 255, 255, 255, 0.15 )",
			boxShadow: "0 8px 32px 0 rgba( 200, 200, 220, 0.18 )",
			backdropFilter: "blur( 5px )",
			borderRadius: "10px",
      marginRight: "auto",
      marginLeft: "auto",
      marginBottom: "2rem",
      display: "flex",
      padding: ".5rem"
    }

    const sectionHeader = {
      fontSize: "1.5rem"
    }

    const challengeItem = {
      display: "flex",
      paddingLeft: "2.7rem",
      paddingRight: "auto",
      color: "white",
      marginTop: "1rem"
    }

  

    return (
      <div style={profileStyle}>
        <h1 style={headerStyle}>Hey, {this.props.profile.name}!</h1>
        <div style={bodyStyle}>
          <div style={scoreBox}>
            <h3 style={sectionHeader}>Current Score: {this.props.profile.score}</h3>
          </div>
          <div style={challengeList}>
            <h2 style={sectionHeader}>Completed Challenges</h2>
            <ul>
            {
              completedChallenges && completedChallenges.map((challenge, i) => {
                return <li key={challenge.challengeId}>
                      <Link to={`/challenge/${challenge.challengeName}`}
                            style={challengeItem}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="limegreen" className="w-5 h-5">
                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                          </svg>
                          {challenge.challengeName}</Link>
                </li>
              })
            }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile;