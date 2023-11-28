import React, { useRef, useEffect } from "react";
import HoodieVid from "../assets/scrollFrames/HoodieWebDevProj3.mp4";

const ScrollControlledVideo = () => {
  let videoRef = useRef(null);
  const animationStartY = 1200;
  const animationEndY = 2200;

  useEffect(() => {
    if (window.scrollY < animationStartY) {
      videoRef.current.currentTime = 0;
    }
    const handleScroll = () => {
      const scrolledPastStart = Math.max(window.scrollY - animationStartY, 0);

      const scrollRange = animationEndY - animationStartY;

      // const fraction = scrolledPastStart / (document.querySelector("#video-animation-page").scrollHeight - window.innerHeight - animationStartY);
      const fraction = Math.min(Math.max(scrolledPastStart / scrollRange, 0), 1);

      // const currentTime = safeFraction * videoRef.current.duration;
      // videoRef.current.currentTime = currentTime;
      const currentTime = fraction * videoRef.current.duration;
      videoRef.current.currentTime = currentTime;
      

      const context = canvasRef.current.getContext("2d");
      context.drawImage(videoRef.current, 0, 0, canvasWidth, canvasHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);
  // The empty array ensures that the effect runs once after the initial rendering and not on every update.

  return (
    <div id="video-animation-page">
      <video ref={videoRef} src={HoodieVid} muted loop id="muteVid" />
    </div>
  );
};

export default ScrollControlledVideo;
