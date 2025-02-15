let isIP = false;
let ipText = "";
let textIndex = 0;
const originalText = "Explore the Thousands\nof Movies/Shows!";
const typingText = document.getElementById("typing-text");
const cursor = '<span class="cursor">|</span>';
let typingFinished = false;

function typeText(text) {
  typingText.innerHTML = "";
  textIndex = 0;
  typingFinished = false;

  function type() {
    if (textIndex <= text.length) {
      typingText.innerHTML = text.slice(0, textIndex) + cursor;
      textIndex++;
      setTimeout(type, 80);
    } else {
      typingFinished = true;
    }
  }

  type();
}

async function getIP() {
  try {
    const response = await fetch("https://api.ipify.org?format=json");
    const data = await response.json();
    ipText = data.ip;
  } catch (error) {
    console.error("Failed to fetch IP:", error);
    ipText = "Failed to get IP ):<";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  typeText(originalText);
  createParticles();
  getIP();
});

function toggleText() {
  if (!typingFinished) return;

  if (isIP) {
    typeText(originalText);
  } else {
    typeText(ipText);
  }
  isIP = !isIP;
}

document.addEventListener("DOMContentLoaded", () => {
  createParticles();
});

function createParticles() {
  const particlesContainer = document.getElementById("particles");
  if (!particlesContainer) return; 

  particlesContainer.innerHTML = "";

  const numParticles = 25; 
  for (let i = 0; i < numParticles; i++) {
    const particle = document.createElement("div");
    particle.classList.add("particle");

    const xOffset = Math.random() * 30;
    const yOffset = Math.random() * 50;

    particle.style.top = `${yOffset}%`;
    particle.style.left = `${100 - xOffset}%`;

    particlesContainer.appendChild(particle);
  }
}