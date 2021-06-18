import React from 'react'
import ReactPlayer from "react-player";
import videos from "./storycontent";
import "./stories.css";
function Stories() {
    return (
        <div>
            <div className="vedio-container">
            {videos.map((links)=>{
                return(
                    <div className="video_container">
                    <div className="video">
                    <ReactPlayer 
                      url={links.video}
                    />
                    </div>
                    <div className="detail-box"> 
                    <p className="video_title">{links.title}</p>
                    <p className="video_description">{links.description}</p>
                    </div>
                    </div>
                )
                

            })
            }
           
            </div>
        </div>
    )
}

export default Stories;
