import React, { Component } from 'react'
import { Link } from 'react-router'

import Header from '../components/Header'
import Footer from '../components/Footer'

import uploadImage from '../static/images/users.png'

export default class UploadContainer extends Component {
  render() {
    return (
      <div className="content">
        <Header />
        <div className="maincontent">
          <div className="beforeupload">
            <div style={{margin: '0 auto'}}>
              <img src={uploadImage} />
              <p>Drag & Drop CSV file to upload it to Upzel<br/>or <a>Browse</a> for files</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
