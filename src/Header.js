import React from 'react';
import {Link} from "react-router-dom";
import LogoutButton from "./components/LogoutButton";

class Header extends React.Component
{
	render()
	{
		return (
			<div>
				<Link to="/">Home</Link>
				<Link to="/about">About Us</Link>
				<Link to="/profile">
					<img src={this.props.profile.imageUrl} 
							 alt={this.props.profile.givenName}
							 height="35px" 
							 style={{borderRadius: '20px'}}/>{this.props.profile.givenName}</Link>
				<LogoutButton setProfile={this.props.setProfile}/>
			</div>
		);
	}
}

export default Header;
