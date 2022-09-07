import React from 'react';
import LoginButton from "./components/LoginButton";

class Login extends React.Component
{
	render()
	{
		return (
			<div id="login" className="w-full h-full flex flex-col justify-center items-center bg-neutral-200">
				<div className="mb-56">
					<h1 className="text-4xl text-center mb-3">Algo Challengers</h1>
					<p>Simple coding challenges to hone your skills</p>
				</div>
				<LoginButton
					className="w-fit h-fit"
					setProfile={this.props.setProfile}/>
			</div>
		);
	}
}

export default Login;
