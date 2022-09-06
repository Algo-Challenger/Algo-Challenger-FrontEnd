import React from 'react';
import {GoogleLogout} from "react-google-login";

class LogoutButton extends React.Component
{
	onLogout = () =>
	{
		console.log("Logged out")
		this.props.setProfile({});
	}

	render()
	{
		return (
			<div>
				<GoogleLogout
					clientId={process.env.REACT_APP_CLIENTID}
					buttonText="Logout"
					onLogoutSuccess={this.onLogout}
				/>
			</div>
		);
	}
}

export default LogoutButton;
