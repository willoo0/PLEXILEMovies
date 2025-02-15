function toggleScrollDirection() {
    const track1 = document.getElementById('track1');
    const track2 = document.getElementById('track2');

    track1.style.animationPlayState = 'paused';
    track2.style.animationPlayState = 'paused';

    setTimeout(() => {
      if (track1.classList.contains('reverse')) {
        track1.classList.remove('reverse');
        track1.style.animation = 'scroll-left 30s linear infinite';
      } else {
        track1.classList.add('reverse');
        track1.style.animation = 'scroll-right 30s linear infinite';
      }

      if (track2.classList.contains('reverse')) {
        track2.classList.remove('reverse');
        track2.style.animation = 'scroll-left 30s linear infinite';
      } else {
        track2.classList.add('reverse');
        track2.style.animation = 'scroll-right 30s linear infinite';
      }

      track1.style.animationPlayState = 'running';
      track2.style.animationPlayState = 'running';
    }, 200); 
  }

  setInterval(toggleScrollDirection, 30000);

  document.addEventListener("DOMContentLoaded", function () {
    function shuffleMovies(trackId) {
        let track = document.getElementById(trackId);
        let items = Array.from(track.children);
        
        items.sort(() => Math.random() - 0.5);

        items.forEach(item => track.appendChild(item));
    }

    shuffleMovies("track1");
    shuffleMovies("track2");
});

let reviews = document.querySelector('.reviews');
let direction = 1; 
let scrollAmount = 0;
let maxScroll = reviews.scrollWidth - document.querySelector('.reviews-container').clientWidth;

function scrollReviews() {
    scrollAmount += direction * 5;
    if (scrollAmount >= maxScroll || scrollAmount <= 0) {
        direction *= -1; 
    }
    reviews.style.transform = `translateX(${-scrollAmount}px)`;
}

let interval = setInterval(scrollReviews, 50);

document.querySelector('.reviews-container').addEventListener('mouseenter', () => clearInterval(interval));
document.querySelector('.reviews-container').addEventListener('mouseleave', () => interval = setInterval(scrollReviews, 50));