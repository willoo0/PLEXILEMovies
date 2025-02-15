const tmdbKeys = [
  "fb7bb23f03b6994dafc674c074d01761",
  "e55425032d3d0f371fc776f302e7c09b",
  "22e40eda03c997570e3dbc0c3a30edbc",
  "8301a21598f8b45668d5711a814f01f6",
  "8cf43ad9c085135b9479ad5cf6bbcbda",
  "6461ccbb46795c8aea14d0d4bdb23668",
  "13e53ff644a8bd4ba37b3e1044ad24f3",
  "269890f657dddf4635473cf4cf456576",
  "a2f888b27315e62e471b2d587048f32e",
  "8476a7ab80ad76f0936744df0430e67c",
  "5622cafbfe8f8cfe358a29c53e19bba0",
  "ae4bd1b6fce2a5648671bfc171d15ba4",
  "257654f35e3dff105574f97fb4b97035",
  "2f4038e83265214a0dcd6ec2eb3276f5",
  "9e43f45f94705cc8e1d5a0400d19a7b7",
  "af6887753365e14160254ac7f4345dd2",
  "06f10fc8741a672af455421c239a1ffc",
  "09ad8ace66eec34302943272db0e8d2c",
  "0b1a381779730d5ba21cec8bd86124ea"

];

const omdbKeys = [
  "4b447405",
  "eb0c0475",
  "7776cbde",
  "ff28f90b",
  "6c3a2d45",
  "b07b58c8",
  "ad04b643",
  "a95b5205",
  "777d9323",
  "2c2c3314",
  "b5cff164",
  "89a9f57d",
  "73a9858a",
  "efbd8357",
  "e83ad567",
  "966c4f4f",
  "8d9b6013"
];

let currentServer = "OMDB"; 
let currentApiKey = omdbKeys[omdbKeys.length - 1]; 

document.addEventListener("DOMContentLoaded", () => {
  
  document.body.addEventListener("click", function(event) {
    if (event.target && event.target.id === "api") {
      const server = prompt("Which API Server would you like to use? (OMDB, TMDB, or Custom)").trim().toUpperCase();

      if (server === "OMDB" || server === "TMDB") {
        const keys = server === "OMDB" ? omdbKeys : tmdbKeys;
        const maxIndex = keys.length;

        const keyChoice = prompt(`Please select a ${server} API Key Number: 1-${maxIndex} or use 'Default'`).trim().toLowerCase();
        if (keyChoice === "default") {
          currentApiKey = keys[keys.length - 1]; 
          currentServer = server;
          alert(`Default ${server} key selected: ${currentApiKey}`);
        } else {
          const index = parseInt(keyChoice, 10) - 1;
          if (index >= 0 && index < maxIndex) {
            currentApiKey = keys[index];
            currentServer = server;
            alert(`${server} key #${keyChoice} selected: ${currentApiKey}`);
          } else {
            alert("Invalid selection. No changes were made.");
          }
        }
      } else if (server === "CUSTOM") {
        const customServer = prompt("Please select a server! (OMDB or TMDB)").trim().toUpperCase();
        if (customServer === "OMDB" || customServer === "TMDB") {
          const customKey = prompt(`Please enter your ${customServer} API Key:`).trim();
          if (customKey) {
            currentApiKey = customKey;
            currentServer = customServer;
            alert(`Custom ${customServer} key set: ${currentApiKey}`);
          } else {
            alert("Invalid input. No changes were made.");
          }
        } else {
          alert("Invalid server selection. No changes were made.");
        }
      } else {
        alert("Invalid input. No changes were made.");
      }

      localStorage.setItem("currentApiServer", currentServer);
      localStorage.setItem("currentApiKey", currentApiKey);
      console.log(`API updated: ${currentServer} - ${currentApiKey}`);
    }
  });

  const savedServer = localStorage.getItem("currentApiServer");
  const savedKey = localStorage.getItem("currentApiKey");
  if (savedServer && savedKey) {
    currentServer = savedServer;
    currentApiKey = savedKey;
  }
  console.log(`Current API: ${currentServer} - ${currentApiKey}`);
});
