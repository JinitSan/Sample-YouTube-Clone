import React from "react";
import {Paper,Typography} from "@material-ui/core"

function VideoDetails(props){
    if(!props.video){
        return (<div>Loading...</div>);
    }
    else{
        const videoSrc = `https://www.youtube.com/embed/${props.video.snippet.thumbnails.default.url.split("/")[4]}`
        return (
            <React.Fragment>
                <Paper elevation={6} style={{ height: "100%"}}>
                    <iframe
                    frameBorder="0"
                    height="100%"
                    width="100%"
                    title="Video Player"
                    src={videoSrc}
                    />
                </Paper>
                <Paper elevation={6} style={{padding:"15px"}}>
                    <Typography variant="h4">{props.video.snippet.title} - {props.video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle1">{props.video.snippet.channelTitle}</Typography>
                    <Typography variant="subtitle2">{props.video.snippet.description}</Typography>
                </Paper>
            </React.Fragment>
        );

    }
}

export default VideoDetails;