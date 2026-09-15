import './style.css';

// Star Trail Cursor Effect
document.addEventListener('mousemove', function(e) {
  // Only create a star occasionally to not overload the DOM (e.g., every 3rd mousemove event)
  if (Math.random() > 0.4) return;

  const star = document.createElement('div');
  star.className = 'star-trail';
  
  // Randomly pick a star symbol
  const stars = ['✧', '✦', '⋆', '✨'];
  star.textContent = stars[Math.floor(Math.random() * stars.length)];
  
  // Position
  star.style.left = e.pageX + 'px';
  star.style.top = e.pageY + 'px';
  
  // Random size and rotation
  const size = Math.random() * 12 + 10; // 10px to 22px
  star.style.fontSize = size + 'px';
  
  // Optional: subtle random color variation for the stars
  const colors = ['#ffffff', '#fdfbd4', '#fffae6'];
  star.style.color = colors[Math.floor(Math.random() * colors.length)];
  
  document.body.appendChild(star);
  
  // Cleanup
  setTimeout(() => {
    star.remove();
  }, 1000); // match animation duration
});
