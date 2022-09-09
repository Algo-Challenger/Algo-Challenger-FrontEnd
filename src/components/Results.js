import React from 'react';
import {Else, If, Then} from "react-if";

class Results extends React.Component
{
	render()
	{
		return (
			<div className="flex flex-col h-full w-full justify-center items-center">
				<If condition={this.props.status}>
					<Then>
						<h1 className="text-green-600 text-7xl text-center">Challenge Passed!</h1>
					</Then>
					<Else>
						<div className="flex flex-col text-left w-auto h-auto p-5 mr-auto mb-auto">
							<h1 className="text-red-400 text-4xl">Challenge failed.</h1>
							<h1 className="text-4xl">Expected: <code>{this.props.output}</code></h1>
						</div>
					</Else>
				</If>
			</div>
		);
	}
}

export default Results;
