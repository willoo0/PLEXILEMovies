document.querySelectorAll(".logo, .boxez, .dropdown-item, .tab-cloak-box").forEach((box) => {
  box.addEventListener("click", function (e) {
    const rect = this.getBoundingClientRect();
    const ripple = document.createElement("div");

    ripple.style.position = "absolute";
    ripple.style.width = "100px";
    ripple.style.height = "100px";
    ripple.style.background = "rgba(255, 255, 255, 0.3)";
    ripple.style.borderRadius = "50%";
    ripple.style.pointerEvents = "none";
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.style.transform = "translate(-50%, -50%) scale(0)";
    ripple.style.animation = "ripple 1s ease-out";

    this.appendChild(ripple);

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });
  });
});

document.querySelector(".boxez").addEventListener("click", function (event) {
  event.preventDefault();

  const dropdownBox = document.querySelector(".dropdown-box");
  dropdownBox.classList.toggle("visible");

  const handleOutsideClick = (e) => {
    if (!e.target.closest(".menu-container")) {
      dropdownBox.classList.remove("visible");
      document.removeEventListener("click", handleOutsideClick);
    }
  };

  if (dropdownBox.classList.contains("visible")) {
    document.addEventListener("click", handleOutsideClick);
  }
});