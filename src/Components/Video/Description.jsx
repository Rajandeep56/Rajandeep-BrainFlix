import "./Description.scss";
import views from '../../Assets/Icons/views.svg';
import likes from '../../Assets/Icons/likes.svg';
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
        <img src="../../Assets/Icons/likes.svg"  />
          <p>{views}</p>
          <img src="../../Assets/Icons/likes.svg"  />
          <p>{likes}</p>
        </div>
      </div>
      <div className="Description__main">{description}</div>
    </div>
  );
}

export default Description;
