import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from './Video';
import Comments from '../Comments/Comments';
import Description from './VideoDesc';

function VideoList() {
  const [videoList, setVideoList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [description, setdescription] = useState([]);

  const { videoId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const videoResponse = await axios.get(
          'https://project-2-api.herokuapp.com/videos?api_key=f64d4825-7f87-446e-bfca-413d23aad07e'
        );
        setVideoList(videoResponse.data);

        const commentsResponse = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=f64d4825-7f87-446e-bfca-413d23aad07e`
        );
        setCommentsList(commentsResponse.data.comments);
        const descriptionResponse = await axios.get(
          `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=f64d4825-7f87-446e-bfca-413d23aad07e`
        );
        setdescription(descriptionResponse.data);
        console.log(description);
        
      } catch (error) {
        console.log('Failed to get data:', error);
      }
    };

    getData();
  }, [videoId]);

  const currentImage = videoList.find((video) => video.id === videoId);

  return (
    <>
      {currentImage && <img src={currentImage.image} width="50%" alt="Video Thumbnail" />}
      <ul>
        {videoList.map((video) => (
          <Video key={video.id} id={video.id} title={video.title} source={video.image} />
        ))}
      </ul>
      <div>
        {Array.isArray(commentsList) &&
          commentsList.map((comments) => (
            <Comments key={comments.id} id={comments.id} name={comments.name} comment={comments.comment} />
          ))}
      </div>
      <div>
      {Array.isArray(description) && description.map((description) => (
          <Description key={description.id} id={description.id} title={description.title} channel={description.channel} views={description.views} likes={description.likes} timestamp={description.timestamp} description={description.description}/>
        ))}
        
      </div>
    </>
  );
}

export default VideoList;
