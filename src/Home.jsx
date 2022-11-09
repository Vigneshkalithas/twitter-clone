import React from 'react';
import Sidebar from "./SideBar"
import Content from "./Content"
import Newsfeed from "./Newsfeed"

function Home() {
  return (
<div className='home-container'>
    <Sidebar/>
    <Content/>
    <Newsfeed/>
</div>
  )
}

export default Home