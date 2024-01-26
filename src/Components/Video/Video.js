import React from 'react';
import Fullscreen from '../../Assets/Icons/fullscreen.svg';
import Volume from '../../Assets/Icons/volume_up.svg';
import Play from '../../Assets/Icons/play.svg';
function Video({videoImage}){
    return (
        <>
            <video className="hero__section" src={videoImage.video} poster={videoImage.image}/>
            <div className='play'>
                <button className='play__play'>
                    <img src={Play} alt ="playbutton"/>
                </button>
                <button className='play__range'>
                </button>
                <div className='play-maxmin'>
                <button >
                    <img src={Fullscreen} alt ="fullscreen"/>
                </button>
                <button >
                    <img src={Volume} alt ="volume"/>
                </button>
                </div>
            </div>
        </>
    );
}
export default Video;