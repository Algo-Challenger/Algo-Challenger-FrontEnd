import React from 'react';
import ProfileDropdown from "./ProfileDropdown";
import onClickOutside from "react-onclickoutside"

class ProfileButton extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state =
			{
				showDropdown: false
			};
	}

	toggleDropdown = () =>
	{
		this.setState({showDropdown: !this.state.showDropdown});
	}

	handleClickOutside = (event) =>
	{
		this.setState({showDropdown : false});
	}

	render()
	{
		return (
			<div className="">
				<button onClick={this.toggleDropdown} className="w-10">
					<img src={this.props.imageUrl} alt="profile" className="rounded-full"/>
				</button>

				{this.state.showDropdown
					? <ProfileDropdown setProfile={this.props.setProfile}/>
					: null}

			</div>
		);
	}
}

export default onClickOutside(ProfileButton);
