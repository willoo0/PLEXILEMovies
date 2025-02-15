window.onload = function () {
    const hashTitle = decodeURIComponent(window.location.hash.substring(1)).replace(/\+/g, " ");
    let watchedMovies = JSON.parse(localStorage.getItem("watchedMovies")) || [];
    const movie = watchedMovies.find(m => m.title === hashTitle);

    if (!movie) {
        alert("No video selected.");
        return;
    }

    document.title = `PLEXILE Movies - ${movie.title}`;

    const iframe = document.getElementById("videoFrame");

    iframe.src = "/loader.html";

    setTimeout(() => {
        iframe.src = movie.videoUrl;
    }, 2000);
};

(function() {
    const originalOpen = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function(method, url) {
        if (url.includes("trendlewiggery.top")) {
            console.log("Blocking VidSrc Ads, YOUR WELCOME -willo", url);
            return; 
        }
        return originalOpen.apply(this, arguments);
    };
})();
