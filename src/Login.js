import React from 'react';
import LoginButton from "./components/LoginButton";

class Login extends React.Component
{
	render()
	{
		const loginStyle = {
			background: 'linear-gradient(45deg, #0A0068, #26007B, #42008D, black, #5E00A0, #7A00B2)',
			color: 'blue',
			boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
			fontSize: '1rem',
		}

		const tabStyle = {
			background: "rgba( 255, 255, 255, 0.15 )",
			boxShadow: "0 8px 32px 0 rgba( 200, 200, 220, 0.18 )",
			backdropFilter: "blur( 5px )",
			borderRadius: "10px",
			padding: "10px"
		}

		return (
			<div id="login" className="w-full h-full flex flex-col justify-center items-center bg-neutral-200" style={loginStyle}>
				<div className="mb-56 text-white">
					<h1 className="text-4xl text-center mb-3" style={tabStyle}>Algo Challenger</h1>
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
