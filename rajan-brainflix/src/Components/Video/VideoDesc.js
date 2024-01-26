import React from "react";

function VideoDesc({videoDescription}){
    return(
        <section className="video__description">
            <h1 className="video__description-title">{videoDescription.title}</h1>
            <div className="video__container">
                <div className="video__max-about">
                    <p className="video__container-author">
                        By {videoDescription.channel}
                    </p>
                    <p className="video__container-timestamp">
                        {videoDescription.timestamp}
                    </p>
                </div>
                <div className="video__max-views">
                    <p className="video__container-views">{videoDescription.views}</p>
                </div>
                <div className="video__max-likes">
                    <p className="video__container-likes">{videoDescription.likes}</p>
                </div>
            </div>
            <p className="video__description-desc">{videoDescription.description}</p>
        </section>
    )
}

export default VideoDesc