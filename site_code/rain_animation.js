// RAIN EFFECT

let isRaining = false;

function toggleRain() {
  if (isRaining) {
    stopRain();
  } else {
    startRain();
  }
}

function startRain() {
  for (let i = 0; i < 500; i++) { // increase to 500 for more raindrops
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