import React from "react";
import LoadingSpinner from "./LoadingSpinner";
import Results from "./Results";

class ChallengePage extends React.Component
{
	constructor(props)
	{
		super(props);
		this.textAreaRef = React.createRef();
		let previousSubmission = this.props.previousSubmission;

		if (previousSubmission)
		{
			this.state =
				{
					input: previousSubmission
				};
		} else
		{
			this.state =
				{
					input: this.props.challenge.template
				};
		}


	}

	handleSubmit = (event) =>
	{
		event.preventDefault();
		this.props.handleSubmit(this.state.input, this.props.challenge._id);
	};

	setInput = (event) =>
	{
		this.setState({input: event.target.value});
	};

	render()
	{

		const boxStyle = {
			background: "rgba( 255, 255, 255, 0.15 )",
			boxShadow: "0 8px 32px 0 rgba( 200, 200, 220, 0.18 )",
			backdropFilter: "blur( 5px )",
			borderRadius: "10px",
			// height: "15rem",
			marginBottom: "2rem",
			padding: "1.5rem"
		}

		const headerStyle = {
			fontSize: "2rem",
			marginBottom: "1rem"
		}

		const buttonStyle = {
			background: "#287E9B",
			borderRadius: "10px",
			border: "none"
		}

		console.log(this.props.status)
		return (
			<div className="px-10 pt-2 flex flex-1 justify-evenly max-h-screen">
				<div className="flex flex-col w-5/12">
					<div style={boxStyle} className="flex-1">
						<h1 className="text-center font-semibold" style={headerStyle}>{this.props.challenge.name}</h1>
						<p className="text-3xl">{this.props.challenge.instructions}</p>
					</div>
					<div style={boxStyle} className="flex-1">
						<h1 className="text-center font-semibold" style={headerStyle}>Tests</h1>
						<p className="text-5xl mb-5">Input: {this.props.challenge.tests.input}</p>
						<p className="text-5xl">Output: {this.props.challenge.tests.output}</p>
					</div>
				</div>
				<div className="w-6/12 flex flex-col h-full justify-around">
					<form onSubmit={this.handleSubmit} className="text-right flex-1">
						<textarea
							ref={this.textAreaRef}
							className="w-full h-5/6 border-4 border-black px-3 py-1 resize-none text-black bg-neutral-200"
							defaultValue={this.state.input}
							onInput={this.setInput}
							onKeyDown={this.handleInput}
						/>
						<button className="border border-black w-32" type="submit" style={buttonStyle}>Submit</button>
					</form>
					<div className="flex-1" style={boxStyle}>
						<h2 style={headerStyle}>Challenge Response</h2>
						<div className="h-3/4 flex flex-col">
							{
								this.props.status !== undefined && this.props.status !== null
								? <Results status={this.props.status} output={this.props.challenge.tests.output}/>
								: <LoadingSpinner/>
							}

						</div>

					</div>
				</div>

			</div>
		);
	}


}

export default ChallengePage;
