import React from 'react';

class Developer extends React.Component
{
	render()
	{

		const imgStyle = {
			height: "100px"
		}

		return (
			<div className="flex items-center">
				<img
					src={this.props.image}
					// src="https://via.placeholder.com/250"
					alt="coolest dev in town"
					className="rounded-full h-44 w-44 object-cover"
				/>
				<div className="flex-1 mx-10 h-fit px-5 pb-5 pt-3">
					<h1 className="text-center mb-2">{this.props.name}</h1>
					<p className="">
						{this.props.description}
					</p>
				</div>
			</div>
		);
	}
}

export default Developer;
