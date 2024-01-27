import {Link} from "react-router-dom";

 function Video ({id, title, source}) {
    console.log({source});
    return(
        <>
        <li>< Link to={`/videos/${id}`}>{title}</Link></li>
        <img src={source}  width="50%"/>
        </>
    )
}
export default Video;
