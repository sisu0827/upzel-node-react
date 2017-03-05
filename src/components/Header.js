import React, { Component } from 'react'
import { Link } from 'react-router'

import logo from '../static/images/logo.png'
import profile from '../static/images/profile.png'
import iconprofile from '../static/images/icon-profile.png'
import iconcheck from '../static/images/icon-check.png'
import iconclose from '../static/images/icon-close.png'

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notify: 'closed'
    }
  }

  toggleNotifyState() {    
    var state = (this.state.notify === 'closed') ? '' : 'closed'
    this.setState({notify: state})
  }

  render() {
    return (
      <div className="navmenu">
        <div className="menucontent">
            <a href="/"><img src={logo} className="logo" /></a>
            <div className="menu">
                <h2>ETISALAT</h2>
                <i className="fa fa-chevron-down" aria-hidden="true"></i>
            </div>
            <div className="users">
                <ul>
                    <li><a>Users</a></li>
                    <li><a>Insights</a></li>
                    <li><a>Ad Manager</a></li>
                </ul>
               <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
            </div>
            <div className="profile">
                <div className="notify" onClick={ this.toggleNotifyState.bind(this) }>
                    <i className="fa fa-bell" aria-hidden="true"></i>
                    <span>01</span>
                </div>
                <img src={profile} />
            </div>
            <div className="clear"></div>

            <div className={ 'notifications ' + this.state.notify }>
                <div className="triangle"></div>
                <div className="header">
                    <h2>Notifications</h2>
                    <i className="fa fa-cog" aria-hidden="true"></i>
                    <div className="clear"></div>
                </div>
                <div className="content">
                    <ul>
                        <li>
                            <div className="upperpart">
                                <div className="icon"><img src={iconcheck} /></div>
                                <div className="text">Your Upload is complete</div>
                                <div className="clear"></div>
                            </div>
                            <div className="belowpart">
                                <span className="left">EMAAR</span>
                                <span className="right">01 MIN</span>
                                <div className="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div className="upperpart">
                                <div className="icon"><img src={iconprofile} /></div>
                                <div className="text">Your file is being uploaded.<br />80% completed.</div>
                                <div className="clear"></div>
                            </div>
                            <div className="belowpart">
                                <span className="left">EMAAR</span>
                                <span className="right">10 MIN</span>
                                <div className="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div className="upperpart">
                                <div className="icon"><img src={iconprofile} /></div>
                                <div className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec purus in ante pretium blandit aiquam erat volutpat.</div>
                                <div className="clear"></div>
                            </div>
                            <div className="belowpart">
                                <span className="left">EMAAR</span>
                                <span className="right">10 SEP 16, 07:00PM</span>
                                <div className="clear"></div>
                            </div>
                        </li>
                        <li>
                            <div className="upperpart">
                                <div className="icon"><img src={iconclose} /></div>
                                <div className="text">We have encountered an error uploading your file. Please check back.</div>
                                <div className="clear"></div>
                            </div>
                            <div className="belowpart">
                                <span className="left">EMAAR</span>
                                <span className="right">10 SEP 16, 07:00PM</span>
                                <div className="clear"></div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div> 
        </div>
         
    </div>
    )
  }
}
