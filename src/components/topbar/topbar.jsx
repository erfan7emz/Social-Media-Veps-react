import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className='logo'>VEPS</span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <SearchIcon />
          <input placeholder='Search' className='searchInput'></input>
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarlink">Home</span>
          <span className="topbarlink">Something</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <div className="topbarIconBadge">1</div>
            <span></span>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <div className="topbarIconBadge">2</div>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  )
}
