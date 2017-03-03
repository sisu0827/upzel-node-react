import React, { Component } from 'react'
import { Link } from 'react-router'
import Dropzone from 'react-dropzone'

import Header from '../components/Header'
import Footer from '../components/Footer'

import uploadImage from '../static/images/users.png'

export default class UploadContainer extends Component {
  onDrop(files) {
    console.log(files);
  }

  render() {
    return (
      <div className="content">
        <Header />
        <div className="maincontent">
          <div className="beforeupload">
            <div style={{margin: '0 auto'}}>
              <img src={uploadImage} />
              <p>Drag & Drop CSV file to upload it to Upzel<br/>or <a>Browse</a> for files</p>
              <Dropzone onDrop={this.onDrop}>
                <div>Try dropping some files here, or click to select files to upload.</div>
              </Dropzone>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
