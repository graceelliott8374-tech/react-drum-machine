import React, { useState, useEffect } from "react";
import "../src/App.css"
import Header from "./Components/Header/header";
import Button from "./Components/Buttons/button";
import { audioData } from "./Components/Main/main";
import { audioData2 } from "./Components/Main/main";
import { audioData3 } from "./Components/Main/main";

function App() {
  const [text, setText] = useState(' ');
  const [text2, setText2] = useState(' ' );
  const [text3, setText3] = useState('  ');

  useEffect(() => {
  window.addEventListener("keydown", handlePress) 
  window.addEventListener("keydown", handlePress2)
  window.addEventListener("keydown", handlePress3)
})

function handlePress(e){
let letter = e.key.toUpperCase();
if (letter === "Q" || letter === "W" || letter === "E"){
let letterSrc = audioData.filter(e => e.id ===  letter); 
 setText(letterSrc[0].name);
 document.getElementById(letterSrc[0].url).play();
}
else { return;}
}
function handlePress2(e){
  let letter = e.key.toUpperCase();
  if (letter === "A" || letter === "S" || letter === "D"){
  let letterSrc2 = audioData2.filter(e => e.id === letter);
  setText2(letterSrc2[0].name);
  document.getElementById(letterSrc2[0].url).play();
  }
  else { return; }
}
function handlePress3(e) {
  let letter = e.key.toUpperCase();
  if (letter === "Z" || letter === "X" || letter === "C"){
  let letterSrc3 = audioData3.filter(e => e.id === letter);
  setText3(letterSrc3[0].name);
  document.getElementById(letterSrc3[0].url).play();
  }
  else { return; }
}

function playAudio(e) { //first array of sounds
  let value = e.target.id;
  let source = audioData.filter(e => e.id === value);
  setText(source[0].name);
  document.getElementById(source[0].url).play();
}
function playAudio2(e) { //second array of sounds
  let value = e.target.id;
  let source2 = audioData2.filter(e=> e.id === value);
  setText2(source2[0].name);
  document.getElementById(source2[0].url).play();
}
  function playAudio3(e) { //third array of sounds
  let value = e.target.id;
  let source3 = audioData3.filter(e => e.id === value);
  setText3(source3[0].name);
  document.getElementById(source3[0].url).play();
}

const btns1 = audioData.map((btn) => {
  return <Button playAudio={playAudio} key={btn.ind} id={btn.id} name={btn.name} url={btn.url} value={btn.id} />});
const btns2 = audioData2.map((btn) => {
  return <Button playAudio={playAudio2}  key={btn.ind} id={btn.id} name={btn.name} url={btn.url} value={btn.id} />});
const btns3 = audioData3.map((btn) => {
  return <Button playAudio={playAudio3}  key={btn.ind} id={btn.id} name={btn.name} url={btn.url} value={btn.id} />});

return (
  <div className="App">
  <Header />
    <div id="outer-div">
      <div id="drum-machine">
        {/* first button group */}
        <div className="btn-group">
          {btns1}
          <aside className="left" >
            <p id="display">{text}</p>
          </aside>
        </div>
        {/* second button group */}
        <div className="btn-group">
          {btns2}
          <aside className="left" >
            <p id="display2">{text2}</p>
          </aside>
        </div>
        {/* third button group */}
        <div className="btn-group">
          {btns3}
          <aside className="left" >
            <p id="display3">{text3}</p>
          </aside>
        </div>
      </div>
    </div>
    </div>
  );
}
export default App;