import React from "react";

class ChallengePage extends React.Component {
  render() {
    let result;
    if (this.props.status === null) {
     result = <p></p>;
    } else if (this.props.status === false) {
      result = <p>Try Again!</p>;
    } else if (this.props.status === true) {
      result = <p>Success!</p>;
    }

    return (
      <>
        <h1>{this.props.challenge.name}</h1>
        <p>{this.props.challenge.instructions}</p>
        <p>{this.props.challenge.test}</p>
        <form onSubmit={this.props.handleSubmit}>
          <input type="text" id={this.props.challenge._id} defaultValue={this.props.challenge.template} style={{ width: "300px", height:"300px"}} onInput={this.props.handleInput}/>
          <button>Submit</button>
        </form>
        <h2>Test Response Area</h2>
        {result}
      </>
    )
  }
}

export default ChallengePage;