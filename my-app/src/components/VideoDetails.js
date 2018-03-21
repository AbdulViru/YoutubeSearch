import React from 'react';

const VideoDetails = ({videos}) =>  {
    if(!videos)
        return <div> loading .....</div>;

    let videoId = videos.id.videoId;
    let url = `https://www.youtube.com/embed/${videoId}`;
    return (
        
        <div className='video-detail col-md-8'>
            <div className='embed-responsive embed-responsive-16by9'>
                <iframe className='embed-responsive-live' src={url}></iframe>
            </div>
            <div className='details'>
                <div>{videos.snippet.title}</div>
                <div>{videos.snippet.description}</div>
            </div>
        </div>
    );
};

export default VideoDetails;