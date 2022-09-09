import React from 'react';

class Home extends React.Component {
	render() {
		const homeStyle = {
			textcenter: 'mb-2',
			fontSize: '25px',
			textAlign: 'center',
			margin: '30px',
			color: 'white'
		};

		const headStyle = {
			fontSize: '50px',
			marginBottom: '100px'
		};

		const firstParagraph = {
			marginBottom: '50px',
		}



		return (
			<div style={homeStyle}>
				<h1 style={headStyle}> Welcome, Challenger!</h1>

				<p style={firstParagraph}>
					This is Algo Challenger, where you can test yourself using JavaScript language and rack up as many points as possible! It is important that you read each instruction carefully, take your time, and keep going! You have what it takes. Once you get the chance to explore the app, make sure to leave a review and save your challenge by clicking on the "star" icon, that way you always know which one(s) you enjoy! If you are no longer a fan of the challenge, just click on the icon again to take away the save.

				</p>
				<p>
					To access the challenge, go to the “Challenges” tab at the top of the page. Have fun and face the challenge!
				</p>
			</div>
		);
	}
}

export default Home;
