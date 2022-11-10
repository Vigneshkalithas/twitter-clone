import React from 'react';
import logo from "./assets/icons8-twitter.svg";
import bell from "./assets/bell.svg";
import account from "./assets/person.svg";
import compose from "./assets/compose.svg";
import mail from "./assets/mail.svg";
import message from "./assets/message.svg";


function SideBar() {
  return (
    <div className='sidebar-container'>
      <div className='icon-head'>
      <div><img className="logo" src={logo} alt="logo"/></div>
     <div><img src={bell} alt="bell" className='bell'/></div>
     <div><img src={mail} alt="mail" className='mail'/></div>
     <div><img src={account} alt="account" className='account'/></div>
     <div><img src={message} alt="message" className='message'/></div>
     <div><img src={compose} alt="compose" className='compose'/></div>

      </div>
     


    </div>
  )
}

export default SideBar