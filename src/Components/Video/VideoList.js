import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from './Video';
import Comments from '../Comments/Comments';
import Description from './Description';
import Header from '../Header/Header'

function VideoList() {
  const [videoList, setVideoList] = useState([]);
  const [commentsList, setCommentsList] = useState([]);
  const [descriptionList, setdescriptionList] = useState({});

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
        setdescriptionList(commentsResponse.data);
        setCommentsList(commentsResponse.data.comments);


      } catch (error) {
        console.log('Failed to get data:', error);
      }
    };

    getData();
  }, [videoId]);

  const currentImage = videoList.find((video) => video.id === videoId);

  return (
    <>
    <Header/>
      {currentImage && <img src={currentImage.image} width="50%" alt="Video Thumbnail" />}
      <ul>
        {videoList.map((video) => (
          <Video key={video.id} id={video.id} title={video.title} source={video.image} />
        ))}
      </ul>
      {<section className="section__comments">
            <h3> 3 Comments</h3>
            <div className="comment__main">
                <form className="comment__main-form">
                    <label htmlFor="comment" className="comment__main-label">Join the conversation:
                    <textarea typeof="text" className="comment__main-text" id="comment" name="comment" placeholder="Add a new Comment"/></label>
                    <button className="button" href="#">
                    <img  alt=""/>Comment</button></form>
                </div>
      </section>}
      <div>
        {Array.isArray(commentsList) && commentsList.map((comments) => (
          
            <Comments key={comments.id} id={comments.id} name={comments.name} comment={comments.comment} />
          ))}
      </div>
      <div>
      {
          <Description
            id={descriptionList.id}
            title={descriptionList.title}
            channel={descriptionList.channel}
            views={descriptionList.views}
            likes={descriptionList.likes}
            timestamp={descriptionList.timestamp}
            description={descriptionList.description}
          />
        }
      </div>
    </>
  );
}

export default VideoList;
