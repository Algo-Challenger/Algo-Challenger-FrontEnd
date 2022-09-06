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
				<LogoutButton setProfile={this.props.setProfile}/>
			</div>
		);
	}
}

export default Header;
