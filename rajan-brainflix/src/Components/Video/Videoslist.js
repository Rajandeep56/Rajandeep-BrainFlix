import React from "react";

function Videoslist({list, selectNewVideo}){
    return(
        <section className="section__videolist">
            <h4>Next Videos</h4>
            <div className="videos__list">
                {
                    list.map((video)=>{
                        return(
                            <section className="videos__list-next" key={video.id}>
                                <div className="videos__list-details" alt={video.title}onClick={
                                (e) => {
                                    selectNewVideo(e,video.id);
                                }
                                }>

                                </div>
                                <div className="videos__list-about">
                                    <h3 className="videos__list-title">{video.title}</h3>
                                    <p className="videos__list-channel">{video.channel}</p>
                                    <video className="videos__list-video"  poster={video.image}/>
                                </div>
                            </section>
                        )
                    })
                }
            </div>
        </section>
    );
}
export default Videoslist