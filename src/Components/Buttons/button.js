import React from "react";
import { audioData, audioData2, audioData3 } from "../Main/main";

function Button(props){
if(audioData) {
  return (
    <div>
    <button className="drum-pad" id={props.id}   onClick={props.playAudio}>{props.id}
    <audio className="clip" id={props.url}><source src={props.url} ></source></audio>
    </button>
    </div>
  );
}
if (audioData2){
  return (
    <div>
    <button className="drum-pad" id={props.name} onClick={props.playAudio}>{props.id}
    <audio className="clip" id={props.url}><source src={props.url} ></source></audio>
    </button>
    </div>
  );
}
if (audioData3) {
  return (
    <div>
    <button className="drum-pad" id={props.id} onClick={props.playAudio}>{props.id}
    <audio className="clip" id={props.url}><source src={props.url} ></source></audio>
    </button>
    </div>
  );
}}
export default Button;