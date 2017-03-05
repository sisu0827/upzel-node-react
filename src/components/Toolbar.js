import React, { Component } from 'react'

import usersImage from '../static/images/users.png'

export default class Toolbar extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return(
		<div id="toolbar">
		<ul>
			<li><img src={usersImage} /></li>
			<li>
			<div className="search input-group">
				<input type="text" className="form-control" placeholder="Search.." name="search" id="search" />
				<span className="input-group-addon"><i className="fa fa-search"></i></span>
			</div>
			</li>
			<li><a className="filter" href="#"><i className="fa fa-sliders"></i>&nbsp;&nbsp;Filters</a></li>
			<li><ul className="filterList">
				<li><p>Gender</p><b>All</b></li>
				<li><p>Age</p><b>20-30</b></li>
				<li><p>Brand</p><b>All</b></li>
				<li><p>Location</p><b>All</b></li>
				<li><p>Keywords</p><b>10 selected</b></li>
				<li><a className="refresh" href="#"><i className="fa fa-refresh"></i></a></li>
			</ul></li>
			<li style={{marginLeft: '35px',paddingRight: '0px'}}><a href="#"><i className="fa fa-flickr"></i></a></li>
			<li><a href="#"><i className="fa fa-map-marker"></i></a></li>
		</ul>
		</div>
		)
	}
}