import React from 'react'
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './share.css'

export default function Share() {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <AccountCircleIcon />
                <input
                placeholder="Share a new link"
                className="shareInput"
                />
            </div>
            <hr className="shareHr"/>
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <VideoLibraryIcon htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Video</span>
                    </div>
                    <div className="shareOption">
                        <PodcastsIcon htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Podcast</span>
                    </div>
                    <div className="shareOption">
                        <AutoStoriesIcon htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Book</span>
                    </div>
                    <div className="shareOption">
                        <ArticleIcon htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Article</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
        </div>
    </div>
  )
}
