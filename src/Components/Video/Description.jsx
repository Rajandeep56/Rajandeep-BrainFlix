function Description({ id, title, channel, views, likes, timestamp, description }) {
  console.log(title, channel, views, likes, timestamp, description);

  return (
    <div>
      <h2>{title}</h2>
      <p>Channel: {channel}</p>
      <p>Views: {views}</p>
      <p>Likes: {likes}</p>
      <p>Timestamp: {timestamp}</p>
      <p>Description: {description}</p>
    </div>
  );
}

export default Description;
