// Deez Nuts 



//  THE FOLLOWING JAVASCRIPT CODE IS FOR THE "DEPRESSED" BUTTON

 // Get the audio and button elements
 var audio = document.getElementById("rain-sound");
 var button = document.getElementsByClassName("depressed-button")[0];  // Note the [0]

 function handleButtonClick() {
  playRain();
  toggleRain();
}


 // Function to toggle play/stop
 function playRain() {
   if (audio.paused) {
     audio.play();
     button.innerHTML = "Click button to stop";
   } else {
     audio.pause();
     audio.currentTime = 0;
     button.innerHTML = "Click this button for depressing rain sound";
   }
 }

 // END OF DEPRESSED BUTTON

 // RAIN EFFECT (rubbish)

let isRaining = false;

function toggleRain() {
  if (isRaining) {
    stopRain();
  } else {
    startRain();
  }
}

function startRain() {
  for (let i = 0; i < 100; i++) {
    const drop = document.createElement('div');
    drop.className = 'raindrop';
    
    // Random position and delay for each drop
    drop.style.left = `${Math.random() * 100}vw`;
    drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
    drop.style.animationDelay = `${Math.random() * 2}s`;
    
    document.body.appendChild(drop);
  }
  isRaining = true;
}

function stopRain() {
  const raindrops = document.querySelectorAll('.raindrop');
  raindrops.forEach(drop => document.body.removeChild(drop));
  isRaining = false;
}

