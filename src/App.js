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
			console.log(this.state.challenges);
		} catch (error) {
			console.log('error getting challenges', error.response);
		}
	}

	sendSolution = async() => {
		try {
			let url = `${process.env.REACT_APP_SERVER}/challenges`
		} catch (error) {
			
		}
	}

	render()
	{

		if (Object.keys(this.state.profile).length === 0)
		{
			console.log("Sending login page");
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
							<Route key={challenge._id} path={`/challenge/${challenge.name}`} element={<ChallengePage challenge={challenge}/>}/>
						)
						}
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
