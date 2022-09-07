import React, {Component} from 'react';
import GoogleLogin from "react-google-login";
import GoogleButton from "react-google-button";

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
			<>
				<GoogleLogin
					clientId={process.env.REACT_APP_CLIENTID}
					render={renderProps => (
						<GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled}>Sign in with Google</GoogleButton>
					)}
					onSuccess={this.onSuccess}
					onFailure={this.onFailure}
					cookiePolicy="single_host_origin"
					isSignedIn={true}
					className={this.props.className}
				/>
			</>
		);
	}
}


export default LoginButton;
