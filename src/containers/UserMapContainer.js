import React, { Component } from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Toolbar from '../components/Toolbar'
import Numbers from '../components/Numbers'

import Background from '../static/images/bg.png'
import Map from '../static/images/map.png'

export default class UserMap extends Component {
	render() {
		return(
		<div id="content" style={{ backgroundImage: `url(${Background})`, backgroundColor: '#f2f2f2' }}>
			<Header />
			<Toolbar />
			<Numbers />
			<div style={{textAlign:'center'}}>
				<img src={Map} />
			</div>
			<Footer />
		</div>
		);
	}
}