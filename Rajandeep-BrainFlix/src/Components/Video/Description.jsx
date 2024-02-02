import "./Description.scss";
import viewsimg from '../../Assets/Icons/views.svg';
import likesimg from '../../Assets/Icons/likes.svg';
function Description({ id, title, channel, views, likes, timestamp, description }) {
  console.log(title, channel, views, likes, timestamp, description);

  return (
    <div className="Description">
      <div className="Description__title">{title}</div>
      <div className="Description__about">
        <div className="Description__about-left">
          <p className="Description__about-left--channel">By: {channel}</p>
          <p>{timestamp}</p>
        </div>
        <div className="Description__about-right">
        <img src={viewsimg} width="20px"  />
          <p>{views}</p>
          <img src={likesimg} width="20px"/>
          <p>{likes}</p>
        </div>
      </div>
      <div className="Description__main">{description}</div>
    </div>
  );
}

export default Description;
