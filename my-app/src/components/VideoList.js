import React, {Component} from 'react';
import VideoListItem from './VideoListItem';

class VideoList extends Component
{

    constructor(props)
    {
        super(props);
        console.log(this.props.videos);
    }

    onVideoSelect()
    {

    }

    render()
    {
        if(!this.props.videos)
             return <div> loading .....</div>;
        let videoList = this.props.videos.map((video) =>
        {
            return <VideoListItem 
                        onVideoSelect={this.props.onVideoSelect}
                        key={video.etag} 
                        video= {video} />;
        });
       
        return (
            <div>
                <ul className= "col-md-4 list-group" > {videoList} </ul>
            </div>
        );
    }
}

export default VideoList;