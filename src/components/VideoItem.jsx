import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core"

function VideoItem(props){
    return (
        <Grid item xs={12} style={{marginTop:"5px"}} onClick={()=>props.onVideoSelect(props.video)}>
            <Paper style={{display:"flex", alignItems:"center",cursor:"pointer"}}>
                <img alt="thumbnail" float="bottom" src={props.video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{props.video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;