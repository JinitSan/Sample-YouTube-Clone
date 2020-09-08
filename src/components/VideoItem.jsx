import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core"

function VideoItem(props){
    return (
        <Grid item xs={12} style={{marginTop:"5px"}}>
            <Paper style={{display:"flex", alignItems:"center"}}>
                <img style={{marginRight:"20px"}} alt="thumbnail" src={props.video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{props.video.snippet.title}</b></Typography>
            </Paper>
        </Grid>
    );
}

export default VideoItem;