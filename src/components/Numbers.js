import React, {Component} from 'react'

export default class Numbers extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
		<div id="numbers">
			<a className="info total">
				<i className="fa fa-comments-o"></i>
				<div className="stats">
					<h3>1,47,37,459</h3>
					<small>people talking about your brand</small>
				</div>
			</a>
			<a className="info likes">
				<i className="fa fa-thumbs-o-up"></i>
				<div className="stats">
					<h3>97,26,000</h3>
					<small>hot users like your brand</small>
				</div>
			</a>
			<a className="info dislikes">
				<i className="fa fa-thumbs-o-down"></i>
				<div className="stats">
					<h3>50,11,459</h3>
					<small>cold users likely to move away from your brand</small>
				</div>
			</a>
		</div>
		);
	}
}