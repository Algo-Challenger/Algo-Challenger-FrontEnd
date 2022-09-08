import React from 'react';
import {Link} from "react-router-dom";
import ProfileButton from "./components/ProfileButton";

class Header extends React.Component
{
	render()
	{
		return (
			<div className="flex w-full justify-between p-5 px-10 font-semibold text-xl">
				<Link to="/">Algo Challenger</Link>
				<Link to="/challenges">Challenges</Link>
				<Link to="/about">About Us</Link>
				<ProfileButton imageUrl={this.props.profile.imageUrl} logout={this.props.logout}/>
			</div>
		);
	}
}

export default Header;
