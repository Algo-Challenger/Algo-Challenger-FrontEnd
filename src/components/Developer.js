import React from 'react';

class Developer extends React.Component
{
	render()
	{
		return (
			<div className="flex items-center">
				<img
					// src={this.props.image}
					src="https://via.placeholder.com/250"
					alt="coolest dev in town"
					className="rounded-full"
				/>
				<div className="bg-neutral-200 flex-1 mx-10 h-fit px-5 pb-5 pt-3">
					<h1 className="text-center mb-2">{this.props.name}</h1>
					<p className="">
						{/*{this.props.description}*/}
						Vivamus dignissim sem dolor, non feugiat lectus tristique in. Vivamus blandit leo sit amet
						ligula aliquet elementum. Proin condimentum libero sed lectus tincidunt eleifend. Duis eu
						venenatis augue, quis mollis erat. Integer sit amet sapien in ipsum mollis vestibulum non eget
						erat. Nam tempor dolor sed libero egestas, eu ullamcorper lorem facilisis. Ut ut odio fringilla,
						tincidunt est et, malesuada sapien. Nam malesuada eros augue, non blandit mi pulvinar id. Morbi
						at felis porttitor, rutrum libero in, eleifend neque. Fusce aliquet, erat in sodales tristique,
						augue nisi mollis urna, tempor hendrerit erat orci vel nibh. Suspendisse suscipit viverra
						vulputate. Proin pharetra lectus mi, et vulputate metus vulputate eu. Integer nec justo lacinia,
						ultricies eros consequat, consequat arcu.
					</p>
				</div>
			</div>
		);
	}
}

export default Developer;
