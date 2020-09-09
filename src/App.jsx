import React from "react";
import { Grid } from "@material-ui/core";
import youtube from "./api/youtube.js"
import SearchBar from "./components/SearchBar.jsx"
import VideoDetails from "./components/VideoDetails.jsx"
import VideoList from "./components/VideoList.jsx";

function App(){
    const [videoState,setVideo] = React.useState(
        {
            videos:[],
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
                    videos:response.data.items,
                    selectedVideo:response.data.items[0]
                }
            );
        });
    }

    const onVideoSelect = function(video){
        setVideo(function(prev){
            return(
                prev = {
                    videos:prev.videos,
                    selectedVideo:video
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
                            <VideoList videos={videoState.videos} onVideoSelect={onVideoSelect}/>
                        </Grid>
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default App;