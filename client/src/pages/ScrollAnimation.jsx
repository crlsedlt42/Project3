import React, { useRef, useEffect } from 'react';
import HoodieVid from '../assets/scrollFrames/HoodieWebDevProj3.mp4';


const ScrollControlledVideo = ({ src }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const fraction = window.scrollY / (document.body.scrollHeight - window.innerHeight);
            const currentTime = fraction * videoRef.current.duration;
            videoRef.current.currentTime = currentTime;
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return(
      <div id='video-animation-page'>
        <video ref={videoRef} src={HoodieVid} muted loop id='muteVid' />
      </div>
    );
};

export default ScrollControlledVideo;
