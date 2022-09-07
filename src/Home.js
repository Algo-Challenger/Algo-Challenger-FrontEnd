import React from 'react';
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div>
				<h1>We Challenge You...</h1>
				<ul className="mdc-list">
					{
						this.props.challenges && this.props.challenges.map( (challenge, i) =>
							<Challenge key={challenge._id} 
												 name={challenge.name}
												 type={challenge.type}/>
						)
					}
				</ul>
			</div>
		);
	}
}

class Challenge extends React.Component {
	render() {
		return (
			<li className="mdc-list-item">
				<Link to={`/challenge/${this.props.name}`}
							style={{ display: "block", margin: "1rem 0" }}>{this.props.name}</Link>
				<span>{this.props.type}</span>

			</li>
		)
	}
}

export default Home;
