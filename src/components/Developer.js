import React from 'react';

class Developer extends React.Component
{
	render()
	{

		const imgStyle = {
			height: "150px",
			width: "150px",
			marginLeft: "2rem"
		}

		const boxStyle = {
			background: "rgba( 255, 255, 255, 0.15 )",
			boxShadow: "0 8px 32px 0 rgba( 200, 200, 220, 0.18 )",
			backdropFilter: "blur( 5px )",
			borderRadius: "10px",
			padding: "1rem"
		}

		const bodyStyle = {
			marginTop: "0px"
		}

		return (
			<div className="flex items-center" style={bodyStyle}>
				<img
					src={this.props.image}
					// src="https://via.placeholder.com/250"
					alt="coolest dev in town"
					className="rounded-full h-44 w-44 object-cover"
					style={imgStyle}
				/>
				<div className="flex-1 mx-10 h-fit px-5 pb-5 pt-3">
					<h1 className="text-center mb-2">{this.props.name}</h1>
					<p className="" style={boxStyle}>
						{this.props.description}
					</p>
				</div>
			</div>
		);
	}
}

export default Developer;
