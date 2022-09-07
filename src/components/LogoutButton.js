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
			<div className={this.props.className}>
				<GoogleLogout
					clientId={process.env.REACT_APP_CLIENTID}
					buttonText="Sign Out"
					onLogoutSuccess={this.onLogout}
					className="h-10 w-32"
				/>
			</div>
		);
	}
}

export default LogoutButton;
