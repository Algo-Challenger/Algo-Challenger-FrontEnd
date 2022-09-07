import Login from "./Login";
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./Header";
import React from "react";
import Home from "./Home";
import {gapi} from "gapi-script";
import LogoutButton from "./components/LogoutButton";
import ChallengePage from "./components/ChallengePage";
import About from "./components/About";
import Profile from "./components/Profile";
import axios from "axios";

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			profile: {},
			challenges: [],
			submission: '',
			submissionID: '',
			challengeStatus: null,
		};
	}

	componentDidMount()
	{
		function start()
		{
			gapi.auth2.init(
				{
					clientId: process.env.REACT_APP_CLIENTID,
					scope: ""
				}
			);
		}

		gapi.load("client:auth2", start);
		this.getChallenges();
	}

	setProfile = (profile) =>
	{
		this.setState({profile: profile})
	};

	
	getChallenges = async() => {
		try {
			let url = `${process.env.REACT_APP_SERVER}/challenges`
			let challenges = await axios.get(url);
			this.setState({ challenges: challenges.data })
		} catch (error) {
			console.log('error getting challenges', error.response);
		}
	}
	
	getInput = (e) => {
		e.preventDefault();
		this.setState({ submission: e.target.value });
		this.setState({ submissionID: e.target.id });
	}

	sendSolution = async(e) => {
		e.preventDefault();
		try {
			let url = `${process.env.REACT_APP_SERVER}/sendchallenge`;
			let submission = {
				code: this.state.submission,
				id: this.state.submissionID,
				email: this.state.profile.email
			}
			let response = await axios.post(url, submission);
			if (response.data === true) {
				this.setState({ challengeStatus: true });
			} else if (response.data === false) {
				this.setState({ challengeStatus: false })
			}
		} catch (error) {
			console.log('error sending challenge solution', error.response);
		}
	}

	render()
	{
		if (Object.keys(this.state.profile).length === 0)
		{
			return <Login setProfile={this.setProfile}/>
		}

		return (
			<div className="App">
				<Router>
					<Header setProfile={this.setProfile} profile={this.state.profile}/>
					<Routes>
						<Route path="/" element={<Home challenges={this.state.challenges}/>}/>
						<Route path="/login" element={<LogoutButton setProfile={this.setProfile}/>}/>
						<Route path="/about" element={<About />}/>
						<Route path="/profile" element={<Profile profile={this.state.profile}/>}/>
						{
						this.state.challenges && this.state.challenges.map( (challenge, i) =>
							<Route key={challenge._id} 
										 path={`/challenge/${challenge.name}`}
										 element={<ChallengePage challenge={challenge} 
										 												 handleSubmit={this.sendSolution}
																						 handleInput={this.getInput}
																						 status={this.state.challengeStatus}/>}/>
						)
						}
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
