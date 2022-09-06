import React from "react";

class ChallengePage extends React.Component {
  render() {
    return (
      <>
        <h1>{this.props.challenge.name}</h1>
        <p>{this.props.challenge.instructions}</p>
        <p>{this.props.challenge.test}</p>
        <textarea row="50" cols="50" defaultValue={this.props.challenge.template}></textarea>
        <button>Submit</button>
        <h2>Test Response Area</h2>
        <p>Test Responses Go Here</p>

      </>
    )
  }
}

export default ChallengePage;