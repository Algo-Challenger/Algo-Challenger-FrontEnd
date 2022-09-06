import React, {Component} from 'react';
import GoogleLogin from "react-google-login";

class LoginButton extends Component
{
	onSuccess = (profile) =>
	{
		console.log(profile.profileObj);
		this.props.setProfile(profile.profileObj);
	}

	onFailure = (response) =>
	{
		console.log("Error logging in: ", response);
	}

	render()
	{
		return (
			<div>
				<GoogleLogin
					clientId={process.env.REACT_APP_CLIENTID}
					buttonText="Login"
					onSuccess={this.onSuccess}
					onFailure={this.onFailure}
					cookiePolicy="single_host_origin"
					isSignedIn={true}
				/>
			</div>
		);
	}
}


export default LoginButton;
