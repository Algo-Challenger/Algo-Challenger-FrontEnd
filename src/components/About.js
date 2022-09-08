import React from "react";
import Developer from "./Developer";

class About extends React.Component {
	render() {

		// const aboutStyle = {
		// 	background: 'linear-gradient(45deg, #0A0068, #26007B, #42008D, black, #5E00A0, #7A00B2)',
		// 	color: 'blue',
		// 	boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
		// 	fontSize: '1rem',


		};



		return (
			<div className="flex-1 flex flex-col justify-between my-10" >
				<Developer
					image="1"
					name="Keelen Fisher"
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
