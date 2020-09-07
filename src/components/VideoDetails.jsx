import React from "react";
import {Paper,Typography} from "@material-ui/core"

function VideoDetails(props){
    if(!props){
        return (<div>Loading...</div>);
    }
    else{
        const videosrc = `https://www.youtube.com/embed/${props.id.videoID}`

        return (
            <React.Fragment>
                <Paper elevation={6} style={{ height: "70%" }}>
                    <iframe
                    frameBorder="0"
                    height="100%"
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