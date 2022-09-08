import React from "react";
import LoadingSpinner from "./LoadingSpinner";

class ChallengePage extends React.Component
{
	constructor(props)
	{
		super(props);

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
		return (
			<div className="px-10 pt-2 flex flex-1 justify-evenly max-h-screen">
				<div className="flex flex-col w-5/12">
					<div className="border-2 border-black flex-1 px-3 py-1">
						<h1 className="text-center font-semibold">{this.props.challenge.name}</h1>
						<p>{this.props.challenge.instructions}</p>
					</div>
					<div className="border-2 border-black flex-1 px-3 py-1 mt-3">
						<h1 className="text-center font-semibold">Tests</h1>
						<p>Input: {this.props.challenge.tests.input}</p>
						<p>Output: {this.props.challenge.tests.output}</p>
					</div>
				</div>
				<div className="w-6/12 flex flex-col">
					<form onSubmit={this.handleSubmit} className="text-right ">
						<textarea
							className="w-full h-max border-2 border-black px-3 py-1 resize-none h-[40rem]"
							defaultValue={this.state.input}
							onChange={this.setInput}
						/>
						<button className="border border-black w-32">Submit</button>
					</form>
					<div className="">
						<h2>Challenge Response</h2>
						<div className="border-2 border-black h-52 flex justify-center items-center">
							{
								this.props.status !== undefined && this.props.status !== null
								? <h1 className="text-9xl font-light">{`${this.props.status}`}</h1>
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
