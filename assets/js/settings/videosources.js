const videoSourceButton = document.getElementById("videosources");

videoSourceButton.addEventListener("click", () => {

  const selectedOption = prompt(
    "Which Video Source would you like to use? (1-3 or 'Default')"
  );

  let videoSource;

  if (selectedOption === null) {
  
    return;
  }

  switch (selectedOption) {
    case "1":
      videoSource = "vidsrc.in";
      break;
    case "2":
      videoSource = "vidsrc.pm";
      break;
    case "3":
      videoSource = "vidsrc.xyz";
      break;
    case "Default":
      videoSource = "vidsrc.in";
      break;
    default:
      alert("Invalid selection. No changes were made.");
      return;
  }

  localStorage.setItem("videoSource", videoSource);
  alert(`Video Source: ${videoSource} has been selected.`);
});
