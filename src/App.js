import Login from "./Login";
import {Route,BrowserRouter as Router, Routes} from "react-router-dom";
import Header from "./Header";
import React from "react";
import Home from "./Home";
import {gapi} from "gapi-script";
import LogoutButton from "./components/LogoutButton";

class App extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			profile: {}
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
	}

	setProfile = (profile) =>
	{
		this.setState({profile: profile})
	};

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
					<Header setProfile={this.setProfile}/>
					<Routes>
						<Route path="/" element={<Home/>}/>
						<Route path="/login" element={<LogoutButton setProfile={this.setProfile}/>}/>
					</Routes>
				</Router>
			</div>
		);
	}
}

export default App;
