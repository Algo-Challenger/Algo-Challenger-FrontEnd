import Login from "./Login";
import {Route, BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./Header";
import React from "react";
import Challenges from "./Challenges";
import {gapi} from "gapi-script";
import LogoutButton from "./components/LogoutButton";
import ChallengePage from "./components/ChallengePage";
import About from "./components/About";
import Profile from "./components/Profile";
import axios from "axios";
import Home from "./components/Home";

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			profile: {},
			challenges: [],
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

	resetStatus = () =>
	{
		this.setState({challengeStatus: null});
	}


	refreshProfile = async () =>
	{
		const url = `${process.env.REACT_APP_SERVER}/user/${this.state.profile._id}`;
		const imageUrl = this.state.profile.imageUrl;

		const updatedUser = await axios.get(url);

		updatedUser.data.imageUrl = imageUrl;
		await this.setState({profile: updatedUser.data});
	};

	setProfile = async (profile) =>
	{
		let activeUser = await this.checkUser(profile);
		this.setState({profile: activeUser});

	};

	logout = () =>
	{
		this.setState({profile: {}});
	};

	checkUser = async (profile) =>
	{
		try
		{
			let user = {
				name: profile.name,
				email: profile.email
			};
			let url = `${process.env.REACT_APP_SERVER}/user`;
			let activeUser = await axios.post(url, user);
			activeUser.data.imageUrl = profile.imageUrl;
			return activeUser.data;
		} catch (error)
		{
			console.log('error getting user', error.response);
		}
	};

	getChallenges = async () =>
	{
		try
		{
			let url = `${process.env.REACT_APP_SERVER}/challenges`;
			let challenges = await axios.get(url);
			this.setState({challenges: challenges.data});
		} catch (error)
		{
			console.log('error getting challenges', error.response);
		}
	};

	sendSolution = async (code, challengeId) =>
	{
		this.setState({challengeStatus: null});
		try
		{
			let url = `${process.env.REACT_APP_SERVER}/sendchallenge`;
			let submission = {
				code: code,
				challengeId: challengeId,
				userId: this.state.profile._id
			};
			let response = await axios.post(url, submission);

			await this.refreshProfile();
			this.setState(
				{
					challengeStatus: !!response.data
				});
		} catch (error)
		{
			this.setState(
				{
					challengeStatus: "Error sending challenge. Please try again"
				});
			console.log('error sending challenge solution', error.response);
		}
	};

	deleteProfile = async () =>
	{
		const profileId = this.state.profile._id;
		const apiUrl = process.env.REACT_APP_SERVER + "/user";

		await axios.delete(apiUrl, {data: {userId: profileId}});
		await this.setState({profile: {}});
	};

	render()
	{

		const aboutStyle = {};

		if (Object.keys(this.state.profile).length === 0)
		{
			return <Login setProfile={this.setProfile}/>;
		}

		return (
			<div className="w-full h-screen m-0 flex flex-col pb-3" style={aboutStyle}>

				<Router>
					<Header logout={this.logout} imageUrl={this.state.profile.imageUrl}/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/challenges"
						       element={<Challenges challenges={this.state.challenges} profile={this.state.profile}
						                            rerender={this.refreshProfile}/>}/>
						<Route path="/login" element={<LogoutButton setProfile={this.setProfile}/>}/>
						<Route path="/about" element={<About/>}/>
						<Route path="/profile"
						       element={<Profile profile={this.state.profile} deleteProfile={this.deleteProfile}/>}/>
						{
							this.state.challenges && this.state.challenges.map((challenge, i) =>
								<Route key={challenge._id}
								       path={`/challenge/${challenge.name}`}
								       element=
									       {
										       <ChallengePage
											       challenge={challenge}
											       resetStatus={this.resetStatus}
											       handleSubmit={this.sendSolution}
											       status={this.state.challengeStatus}
											       previousSubmission={
												       this.state.profile.challengesInitialized.reduce((previous, current) =>
													       // Get previous submissions and send it as a prop
												       {
													       if (current.challengeId === challenge._id)
													       {
														       return current;
													       } else
													       {
														       return previous;
													       }
												       }, "").code}
										       />
									       }
								/>
							)
						}
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
