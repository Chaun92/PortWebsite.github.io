// Smooth Scroll Function
const smoothScroll = (targetId) => {
    const target = document.getElementById(targetId);
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  };
  
  // Scroll to Section when Navigation Links are clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href').slice(1);
      smoothScroll(sectionId);
    });
  });
  
 // Scroll to Top Functionality
const backToTopButton = document.getElementById('backToTopBtn');
backToTopButton.addEventListener('click', () => {
  scrollToTop();
});

// Show/Hide Back to Top Button
window.addEventListener('scroll', () => {
  if (window.pageYOffset > 400) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
  
  // Show/Hide Back to Top Button
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 400) {
      backToTopButton.style.display = 'block';
    } else {
      backToTopButton.style.display = 'none';
    }
  });