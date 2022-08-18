import React from 'react'
import DynamicFeedIcon from '@mui/icons-material/DynamicFeed';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArticleIcon from '@mui/icons-material/Article';
import './leftbar.css'

export default function Leftbar() {
  return (
    <div className='leftbar'>
        <div className="leftbarWrapper">
            <ul className="leftbarList">
                <li className="leftbarListItem">
                    <DynamicFeedIcon className='leftbarIcon'/>
                    <span className="leftbarListItemText">Feed</span>
                </li>
                <li className="leftbarListItem">
                    <VideoLibraryIcon className='leftbarIcon'/>
                    <span className="leftbarListItemText">Video</span>
                </li>
                <li className="leftbarListItem">
                    <PodcastsIcon className='leftbarIcon' />
                    <span className="leftbarListItemText">Podcast</span>
                </li>
                <li className="leftbarListItem">
                    <AutoStoriesIcon className='leftbarIcon' />
                    <span className="leftbarListItemText">Book</span>
                </li>
                <li className="leftbarListItem">
                    <ArticleIcon className='leftbarIcon'/>
                    <span className="leftbarListItemText">Article</span>
                </li>
            </ul>
        </div>
    </div>
  )
}
