import {Link} from "react-router-dom";
import Avatar from '../../Assets/Images/Mohan-muruge.jpg';
import "./Comments.scss";

 function Comments ({id, name, comment, timestamp}) {
    console.log("Loading Video");
    return(
      <div className="comments">
        <img className="comments__avatar" src={Avatar}  alt="avatar" />
          <div className="comments__header">
            <div className="comments__header-header">
              < Link className="comments__header-header--name" to={`${id}/comments`}>{name}</Link>
              <div className="comments__header-header--timestamp">{timestamp}</div>
            </div>
            <div className="comments__header-comment">{comment}</div>
          </div>
      </div>
    )
}
export default Comments;
