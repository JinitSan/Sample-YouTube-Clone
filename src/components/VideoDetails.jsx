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
                <Paper elevation={6} style={{ height: "70%" }}>
                    <iframe
                    frameBorder="0"
                    height="500%"
                    width="100%"
                    title="Video Player"
                    src={videoSrc}
                    />
                </Paper>
            </React.Fragment>
        );

    }
}

export default VideoDetails;