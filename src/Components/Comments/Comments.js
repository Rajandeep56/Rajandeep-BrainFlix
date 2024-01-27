import {Link} from "react-router-dom";

 function Comments ({id, name, comment}) {
    console.log("Loading Video");
    return(
      <>
        <li>< Link to={`${id}/comments`}>{name}</Link></li>
        <li>{comment}</li>
        </>
    )
}
export default Comments;
