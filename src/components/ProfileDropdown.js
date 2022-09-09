import React from 'react';
import {Link} from "react-router-dom";
import LogoutButton from "./LogoutButton";

class ProfileDropdown extends React.Component
{
	render()
	{
		const buttonStyle = {
			background: "#0A0068",
			padding: ".5rem",
			borderRadius: "5px"
		}

		const modalstyle = {
			borderRadius: "5px",
		}


		return (
			<div className="absolute bg-blue-50 w-40 h-auto right-0 top-0 flex flex-col items-center p-3 mr-5 mt-5" style={modalstyle}>
				<Link to="/profile" className="font-semibold mb-3" style={buttonStyle}>My Profile</Link>
				<LogoutButton logout={this.props.logout}/>
			</div>
		);
	}
}

export default ProfileDropdown;
