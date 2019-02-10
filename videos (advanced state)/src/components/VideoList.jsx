import React from 'react'

import VideoItem from './VideoItem'



// Destructure .videos and the callback out of the props we receive
const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map( video => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={video.id.videoId} />
    })

    return (
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}


export default VideoList
