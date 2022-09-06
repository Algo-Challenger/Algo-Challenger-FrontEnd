import React from 'react';
import LoginButton from "./components/LoginButton";

class Login extends React.Component
{
	render()
	{
		console.log(this.props);
		return (
			<div>
				<LoginButton setProfile={this.props.setProfile}/>
			</div>
		);
	}
}

export default Login;
