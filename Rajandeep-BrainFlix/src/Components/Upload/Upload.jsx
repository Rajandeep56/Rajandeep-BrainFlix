import Header from '../Header/Header'
import "./Upload.scss";
import Avatar from '../../Assets/Images/Upload-video-preview.jpg';
function Upload(){

    return(
        <>
        <div className='Upload'>
            <Header/>
        </div>
        <div className='Heading'>
        <h2>Upload Video</h2>
        
        <div className='Upload__container'>
            
            <div className="Upload__container-left">
                <label htmlFor="comment" className="Upload__container-left--imagetop">VIDEO THUMBNAIL:
                </label>
                <img className="Upload__container-left--image" width="100%" src={Avatar}  alt="avatar" />
            </div>
            <div className='Upload__container-right'>
                <form className="Upload__container-right--form">
                    <div className="Upload__container-right--form---label">
                    <div className="Upload__container-top">
                        <label className="Upload__container-right--form---label----label">TITLE YOUR VIDEO:
                        </label>
                        <textarea typeof="text" className="Upload__container-right--form---label----text" id="comment" name="comment" placeholder="Add a title to Your Video"/>
                    </div>
                    <div className="Upload__container-top">
                        <label htmlFor="comment" className="Upload__container-right--form---label----label">ADD A DESCRIPTION:
                        </label>
                        <textarea typeof="text" rows="6" className="Upload__container-right--form---label----text" id="comment" name="comment" placeholder="Add a Description to Your Video"/>
                    </div>
                    </div>
                    <div className="Upload__container-right--form---button">
                        <button className="Upload__container-right--form---button1 " href="#">CANCEL</button>
                        <button className="Upload__container-right--form---button1 " href="#">PUBLISH</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
        </>
    )
}
export default Upload