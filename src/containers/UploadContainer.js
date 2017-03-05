import React, { Component } from 'react'
import { Link } from 'react-router'
import Dropzone from 'react-dropzone'

import request from 'superagent'

import Header from '../components/Header'
import Footer from '../components/Footer'

import uploadImage from '../static/images/users_folder.png'

export default class UploadContainer extends Component {
  onDrop(files) {
    this.setState({
      files: files
    });
    var req = request.post('http://localhost:8080/crmdata/upload');
    files.forEach((file) => req.attach(file.name, file));
    req.end(console.log);
  }

  render() {
    return (
      <div id="content">
        <Header />
        <Dropzone className="dragdrop" activeClassName="dragdrop-active" onDrop={this.onDrop}>
          <div className="beforeupload">
            <div style={{margin: '0 auto'}}>
              <img src={uploadImage} />
              <p>Drag & Drop CSV file to upload it to Upzel<br/>or <a>Browse</a> for files</p>
            </div>
          </div>
        </Dropzone>
        <Footer />
      </div>
    )
  }
}
