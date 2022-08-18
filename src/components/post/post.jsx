import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteIcon from '@mui/icons-material/Favorite';
import './post.css'

export default function Post() {
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
            <div className="postTopLeft">
                <AccountCircleIcon />
                <span className="postUsername">
                Erfan Saraj
                </span>
                <span className="postDate">12 Aug</span>
            </div>
            <div className="postTopRight">
                topright
            </div>
            </div>
            <div className="postCenter">
            <span className="postText">Hello</span>
            <p>This is the link</p>
            </div>
            <div className="postBottom">
            <div className="postBottomLeft">
                <FavoriteIcon className="likeIcon"/>
                <span className="postLikeCounter">10 likes</span>
            </div>
            <div className="postBottomRight">
                <span className="postCommentText">2 comments</span>
            </div>
            </div>
        </div>
    </div>
  )
}
