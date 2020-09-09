import React from "react";
import {Grid} from "@material-ui/core"
import VideoItem from "./VideoItem.jsx"

function VideoList(props){
    const listOfVideos = props.videos.map(function(video,id){
        return <VideoItem key={id} video={video} onVideoSelect={props.onVideoSelect}/>
    })

    return (
        <Grid container spacing={10}>
            {listOfVideos}
        </Grid>
    );
}

export default VideoList;
