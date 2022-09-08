import React from 'react';
import LoginButton from "./components/LoginButton";

class Login extends React.Component
{
	render()
	{
		const tabStyle = {
			background: "rgba( 255, 255, 255, 0.15 )",
			boxShadow: "0 8px 32px 0 rgba( 200, 200, 220, 0.18 )",
			backdropFilter: "blur( 5px )",
			borderRadius: "10px",
		}

		return (
			<div id="login" className="w-full h-screen flex flex-col justify-center items-center p-3">
				<div className="mb-56 text-white">
					<h1 className="text-4xl text-center mb-3 p-2" style={tabStyle}>Algo Challenger</h1>
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
