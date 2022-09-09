import React from "react";
import Developer from "./Developer";
// import Keelen from './src/images/Keelen Elijah Fisher Professional Headshot Rendered for Code201 Project.jpg';

class About extends React.Component {
	render() {

		// const aboutStyle = {
		// 	background: 'linear-gradient(45deg, #0A0068, #26007B, #42008D, black, #5E00A0, #7A00B2)',
		// 	color: 'blue',
		// 	boxShadow: 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px',
		// 	fontSize: '1rem',

		const styleAbout = {
			color: "black",
			backgroundColor: "",
		}



		return (
			<div className="flex-1 flex flex-col justify-between my-10 " style = {styleAbout}>
				<Developer
					image="https://via.placeholder.com/250"
					name="Keelen Fisher"
					description="Keelen Fisher, born and raised in Houston Texas and officially a Full Stack Software Developer. Also an undergraduate at the University of Houston Clear Lake for Computer Science. Started with Code Fellows Software Developer program to learn so much more about Advanced Full Stack development in JavaScript to establish projects for communities big and small, while also creating my own."
				/>
				<Developer
					image={require("../images/IMG_1623 (1).jpeg")}
					name="Adrian Butler"
					description="I am Adrian Butler, a Software Engineer from Oklahoma. I first learned how to program a few years ago at a local tech school and from there I developed a huge passion for it and knew that I wanted to pursue a career in programming. After self teaching for a while, I felt I still had a lot to learn and enrolled in Code Fellows. At Code Fellows, I have gained a diverse set of real world skills that allow me to comfortably say I am ready for my first developer job and that I can continue to learn anything I need to be successful."
				/>
				<Developer
					image={require("../assets/xavierheadshot.jpeg")}
					name="Xavier Hillman"
					description="Hi, I'm Xavier Hillman. I'm a software engineer focused on improving workplace with technology. I come from a sales and project management background in the real estate and aerospace industries. I chose to pursue software development because I felt I could have more impact as a builder of technology than a user so I specialize in web development and internal tools. I love deep diving into operations and finding ways to make things more efficient."
				/>
			</div>
		);

	}
}

export default About;
