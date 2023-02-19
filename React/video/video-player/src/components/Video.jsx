import { useRef } from "react";



const src =
  "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  const Video = () => {
    const videoRef=useRef();
    


    function playVideo(){
        videoRef.current.play();
      }
    function pauseVideo(){
        videoRef.current.pause();
      }
    return (
        <div>

      <video controls width="100%" ref={(videoRef)} >
        <source src={src} type="video/mp4"  />
        {console.log("video",videoRef.current)}
        Sorry, your browser doesn't support embedded videos.
      </video>
        <button id="start" onClick={playVideo}>Start</button>
        <button id="pause" onClick={pauseVideo}>Pause</button>
        </div>
      
    );
  };
  
  export default Video;