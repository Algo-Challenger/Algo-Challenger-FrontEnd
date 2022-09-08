import axios from 'axios';
import React from 'react';
import { Link } from "react-router-dom";

class Challenges extends React.Component {

	updateSaved = () => {
		this.props.rerender();
	}


	render() {

		const bodyStyle = {
			display: "flex",
			flexDirection: "column",
			marginLeft: "auto",
			marginRight: "auto",
			width: "80%",
			height: "100%"
		}

		const headerStyle = {
			fontSize: "3rem",
			marginLeft: "auto",
			marginRight: "auto",
			marginTop: "20px",
			padding: "0px"
		}

		const listStyle = {
			marginLeft: "auto",
			marginRight: "auto",
			marginTop: "40px",
			width: "35%"
		}

		return (
			<div style={bodyStyle}>
				<h1 style={headerStyle}>We Challenge You...</h1>
				<ul className="mdc-list" style={listStyle}>
					{
						this.props.challenges && this.props.challenges.map( (challenge) => {
							if (this.props.profile.savedChallenges.includes(challenge._id)) {
								return <Challenge key={challenge._id}
													 color="gold"
													 challengeId={challenge._id}
													 name={challenge.name}
													 type={challenge.type}
													 profile={this.props.profile}
													 update={this.updateSaved}/>
							} else {
								return <Challenge key={challenge._id}
													 color="lightgrey"
													 challengeId={challenge._id}
													 name={challenge.name}
													 type={challenge.type}
													 profile={this.props.profile}
													 update={this.updateSaved}/>
							}
						})
					}
				</ul>
			</div>
		);
	}
}

class Challenge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			color: this.props.color,
		}
	}

	selectFavorite = async (e) => {
		e.preventDefault();
		let challengeToSave = {
			userId: this.props.profile._id,
			challengeId: this.props.challengeId,
		}
		if (this.state.color === "lightgrey") {
			this.setState({ color: "gold"})
			let url = `${process.env.REACT_APP_SERVER}/save`;
			await axios.put(url, challengeToSave);
			// let newSavedArr = [...this.props.profile.savedChallenges, challengeToSave];
			this.props.update();
		} else {
			this.setState({ color: "lightgrey"})
			let url = `${process.env.REACT_APP_SERVER}/delete`;
			await axios.delete(url, {data: challengeToSave});
			// let newSavedArr = this.props.profile.savedChallenges.map( challenge => {
			// 	return challenge !== challengeToSave.userId
			// })
			this.props.update();
		}
	};

	render() {

		const challengeItem = {
			display: "flex",
			alignItems: "center",
			background: "rgba( 255, 255, 255, 0.15 )",
			boxShadow: "0 8px 32px 0 rgba( 200, 200, 220, 0.18 )",
			backdropFilter: "blur( 5px )",
			borderRadius: "10px",
			marginBottom: "20px"
		}

		const listItemComponent = {
			marginRight: "10px",
			marginLeft: "15px"
		}

		const typeStyle = {
			position: "absolute",
			right: "20px"
		}

		return (
			<li className="mdc-list-item" style={challengeItem}>
				<svg xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill={this.state.color}
							className="w-5 h-5 text-yellow"
							style={listItemComponent}
							onClick={this.selectFavorite} >
						<path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
				</svg>
				<Link to={`/challenge/${this.props.name}`}
							style={{ display: "block", margin: "1rem 0" }}>{this.props.name}</Link>
				<span style={typeStyle}>{this.props.type}</span>

			</li>
		)
	}
}

export default Challenges;
