import React from 'react'
import Feed from '../../components/feed/feed'
import Leftbar from '../../components/leftbar/leftbar'
import Rightbar from '../../components/rightbar/rightbar'
import Topbar from '../../components/topbar/topbar'

export default function Home() {
  return (
      <div>
          <Topbar />
          <div className="homeContainer">
            <Leftbar />
            <Feed />
            <Rightbar />
          </div>
      </div>
  )
}
