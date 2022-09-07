import React from "react";
import Developer from "./Developer";

class About extends React.Component
{
	render()
	{
		return (
			<div className="flex-1 flex flex-col justify-between my-10">
				<Developer
					image="1"
					name="Keelan Fisher"
					description="1"
				/>
				<Developer
					image="1"
					name="Adrian Butler"
					description="1"
				/>
				<Developer
					image="1"
					name="Xavier Hillman"
					description="1"
				/>
			</div>
		);
	}
}

export default About;
