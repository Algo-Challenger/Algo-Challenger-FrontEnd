import React from 'react';
import {Link} from "react-router-dom";
import ProfileButton from "./components/ProfileButton";

class Header extends React.Component
{
	render()
	{
		const tabStyle = {
			background: "rgba( 255, 255, 255, 0.15 )",
			boxShadow: "0 8px 32px 0 rgba( 200, 200, 220, 0.18 )",
			backdropFilter: "blur( 5px )",
			borderRadius: "10px",
			padding: "10px"
		};

		return (
			<div className="flex w-full justify-between p-5 px-10 font-semibold text-xl">
				<Link style={tabStyle} to="/">Algo Challenger</Link>
				<Link style={tabStyle} to="/challenges">Challenges</Link>
				<Link style={tabStyle} to="/about">About Us</Link>
				<ProfileButton imageUrl={this.props.imageUrl} logout={this.props.logout}/>
			</div>
		);
	}
}

export default Header;
