import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube.js"
import SearchBar from "./components/SearchBar.jsx"
import VideoDetails from "./components/VideoDetails.jsx"

function App(){
    const [videoState,setVideo] = React.useState(
        {
            video:[],
            selectedVideo:null
        }
    );

    const handleSubmit = async function(searchTerm){
        const response = await youtube.get("search",{
            params:{
            part:'snippet',
            maxResults:5,
            key:'AIzaSyBMFLEAMkrM7RWMOPs1gGoADqwTAsNUjNs',
            q:searchTerm
            }
        });

        setVideo(function(prev){
            return(
                prev = {
                    video:response.data.items,
                    selectedVideo:response.data.items[0]
                }
            );
        });
    }

    return(
        <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>  
                            {/*Search Bar*/}
                            <SearchBar onFormSubmit={handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            {/*Video Details*/}
                            <VideoDetails video={videoState.selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            {/*Video List*/}
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default App;