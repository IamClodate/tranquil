import React from "react";
import "./landingpage.css";
import BgVideo from "../media/bg.mp4"

const landingpage = () => {
  return (
    <div className="landingpage">
        <video src={BgVideo} autoPlay muted loop class="video-bg" />
        <div className="bg-overlay"></div>

    </div>
  )
}

export default landingpage;