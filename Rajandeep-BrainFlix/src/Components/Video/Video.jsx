import {Link} from "react-router-dom";
import "./Video.scss"
 function Video ({id, title, by,source}) {
    return(
        <div className="Videos">
            <div className="Videos__image"><img className="Videos__image-picture" src={source} width="100%" /></div>
            <div className="Videos__title">< Link className="Videos__title-link" to={`/videos/${id}`}>{title}</Link>
                <p className="Videos__author">{by}</p>
            </div>
        </div>
    )
}
export default Video;
