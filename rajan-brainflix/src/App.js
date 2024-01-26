import Header from './Components/Header/Header'
import Video from './Components/Video/Video'
import data from './Assets/Data/video-details.json'
import datavideos from './Assets/Data/videos.json'
import Comments from './Components/Comments'
import Videoslist from './Components/Video/Videoslist'
import VideoDesc from './Components/Video/VideoDesc'
import { useState } from 'react';
function App(){

  const allvideos = (videoId) =>{
    return datavideos.filter((video)=> video.id !==videoId);
  }
  const [CurrVideoId, setCurrVideoId] = useState("84e96018-4022-434e-80bf-000ce4cd12b8");
  const videoDetails = (videoId) => {
    return data.find((video) => video.id !== videoId);
  }
  const [Videolist, setVideolist] = useState(allvideos(CurrVideoId));
  const [selecedVideo, setSelectedVideo] = useState(videoDetails(CurrVideoId));

  const selectVideo = (event, videoId)=>{
    setCurrVideoId(videoId);
    setVideolist(allvideos(videoId));
    setSelectedVideo(videoDetails(videoId));
  }

    return (
      <>
      <Header/>
      <div className='main'>
      <Video videoImage={selecedVideo}/>
      <VideoDesc videoDescription={selecedVideo}/>
      </div>
      <div className='bottom'>
      <Comments commentsVid={selecedVideo.comments}/>
      <Videoslist list={Videolist} selectNewVideo={selectVideo}/>
      </div>
      </>
    );
  
}
export default App;