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
				<Link to="/">Home</Link>
				<Link to="/about">About Us</Link>
				<ProfileButton imageUrl={this.props.profile.imageUrl} setProfile={this.props.setProfile}/>
			</div>
		);
	}
}

export default Header;
