function showOverlay(event, title, description) {
    event.stopPropagation();
    document.getElementById("overlay-title").textContent = title;
    document.getElementById("overlay-description").textContent =
      description;
    document.getElementById("overlay").classList.add("active");
  }

  function hideOverlay(event) {
    if (event.target.id === "overlay") {
      document.getElementById("overlay").classList.remove("active");
    }
  }