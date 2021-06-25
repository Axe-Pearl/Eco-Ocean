import React from 'react'
import ReactPlayer from "react-player";
import videos from "./storycontent";
import Footer from "./footer";
import "./stories.css";
function Stories() {
    return (
        <div>
            <div className="whythis">
                <div className="image-container saveus">
                    <img src="../Images/animaldream.jpg"></img>
                </div>
                <div className="story-why">
                     <h3 className="why-title">🚫 Say No! No to Animal Cruelty</h3>
                     <div className="why">
                         <p>Animal Cruelty is a inhumanity,sin,illegal,<br></br>
                         whatever we say,it's wrong.Let's prove we are Humans<br></br>
                         Report any abuse around you,whether it's any occassion/festival<br></br>
                         Just say no to Crackers</p>
                     </div>
                </div>
            </div>
            <div className="motto">
                <h2 className="slogan">'VASUDEV KUTUMBKAM'</h2>
                <p className="slogan-mean">-- The Whole World is our Family --</p>
                <p className="motive">The whole motivation of our Mission is this belief, that we are family
                <br></br>,a ecological family that shares mother Earth.
                <br></br>Let's Come together and help animals,
                <br></br>Let's Fight together against Cruelty and help them to overcome bad.</p>
            </div>
            <div className="vedio-container">
                <div className="title-stories">
                    <h1>Let's get Aware - Stories/Documenteries</h1>
                </div>
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
           <div className="footer">
                <Footer />
            </div>
            </div>
        </div>
    )
}

export default Stories;
