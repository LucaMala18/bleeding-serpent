// Smooth Scroll
document.querySelectorAll('nav a, .btn').forEach(anchor => {
  anchor.addEventListener('click', function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Scroll animation for cards
const cards = document.querySelectorAll('.card');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if(cardTop < triggerBottom){
      card.classList.add('animate');
    }
  });
});

// Parallax effect for video
const heroVideo = document.querySelector('.video-bg');
window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  heroVideo.style.transform = `translateY(${offset * 0.3}px)`;
});

