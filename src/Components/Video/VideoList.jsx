import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Video from './Video';
import Comments from '../Comments/Comments';
import Description from './Description';
import Header from '../Header/Header'
import "./VideoList.scss"


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
    <main className='body'>
      <section className='body__image'>
        {currentImage && <video poster={currentImage.image} src={currentImage.image} width="70%" alt="Video Thumbnail" />}
      </section>
      <section className='body__container'>
        <div className='body__container-left'>
          <div className='body__container-left--details'>
              <Description
                id={descriptionList.id}
                title={descriptionList.title}
                channel={descriptionList.channel}
                views={descriptionList.views}
                likes={descriptionList.likes}
                timestamp={descriptionList.timestamp}
                description={descriptionList.description}/>
          </div>
          <form className="body__container-left--form">
                <label htmlFor="comment" className="body__container-left--form---label">Join the conversation:
                <textarea typeof="text" className="body__container-left--form---text" id="comment" name="comment" placeholder="Add a new Comment"/></label>
                <button className="body__container-left--form---button button" href="#">
                <img  alt=""/>Comment</button>
          </form>
          <div className="body__container-left--comments">
            <h3>{commentsList.length} Comments</h3>
            {Array.isArray(commentsList) && commentsList.map((comments) => (
                <Comments key={comments.id} id={comments.id} name={comments.name} comment={comments.comment} />
              ))}
          </div>
        </div>
      <div className='body__container-right'>
        <div className='body__container-right--heading'>Next Videos</div>
        <ul className='body__container-right--list'>
          {videoList.map((video) => (
            <Video key={video.id} id={video.id} title={video.title} by={video.channel} source={video.image} />
          ))}
        </ul>
      </div>
      
      </section>
      </main>
    </>
  );
}

export default VideoList;
