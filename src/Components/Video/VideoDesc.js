 function Description ({id, title, channel, views, likes, timestamp, description}) {
  console.log(title, channel, views, likes, timestamp, description);
    return(
      <>
        <li>{title}</li>
        <li>{channel}</li>
        
        </>
    )
}
export default Description;
