import React from "react"
const Video = ({ videoSrcURL, videoTitle }) => (
        <iframe
            title={videoTitle}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/quiemH0VtjM"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen />
)
export default Video