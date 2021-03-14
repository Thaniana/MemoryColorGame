/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
//console.log("hi");

//global constants
const clueHoldTime = 1000;
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
//Global Variables
//var pattern = [2, 6, 4, 3, 8, 1, 2, 5];
var progress = 0; 
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var pattern;
var mistakes = 3;


function createpattern(length){
  var pattern = []
  for(let j=0;j<=length-1;j++){
    pattern.push(Math.floor(Math.random()*8)+1)
  }
  return pattern;
}

function startGame(){
    //initialize game variables
    progress = 0;
    gamePlaying = true;
    pattern = createpattern(8);
    console.log(pattern);
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.add("hidden");
    document.getElementById("stopBtn").classList.remove("hidden");
    playClueSequence();
}


function stopGame(){
    //initialize game variables
    gamePlaying = false;
    // swap the Start and Stop buttons
    document.getElementById("startBtn").classList.remove("hidden");
    document.getElementById("stopBtn").classList.add("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6,
  2: 300,
  3: 329.6,
  4: 360,
  5: 392,
  6: 420,
  7: 466.2,
  8: 490,
}
function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("button"+btn).classList.add("lit")
}
function clearButton(btn){
  document.getElementById("button"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue,delay,pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
}



function loseGame(){
  stopGame();
  alert("Game Over. You lost.");
}


function winGame(){
  stopGame();
  alert("Game Over. You won!");
}


function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  if (pattern[guessCounter] == btn){
    //correct guess
    if(guessCounter == progress){
      //guessed all in the current run
      if (progress == pattern.length-1){
        winGame()
      }  
      else{
        progress++;
        playClueSequence();
      }
    }else {
      guessCounter++;
    }
  }else if(pattern[guessCounter] != btn && mistakes == 1){
    //incorrect guess
    loseGame();
  }else{
    mistakes--;
    playClueSequence();
  }
}
