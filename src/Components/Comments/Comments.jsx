import {Link} from "react-router-dom";

 function Comments ({id, name, comment}) {
    console.log("Loading Video");
    return(
      
      <>
      
      <div>
        <li>< Link to={`${id}/comments`}>{name}</Link></li>
        <li>{comment}</li></div>
        </>
    )
}
export default Comments;
