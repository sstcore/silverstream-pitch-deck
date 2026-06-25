// Slide Navigation System
const slides = document.querySelectorAll('.slide');
const navContainer = document.getElementById('deck-nav');

// Dynamically generate dots based on the number of slides
slides.forEach((slide, index) => {
  const dot = document.createElement('div');
  dot.classList.add('deck-dot');
  dot.dataset.index = index;
  
  // Click to scroll to slide
  dot.addEventListener('click', () => {
    slide.scrollIntoView({ behavior: 'smooth' });
  });
  
  navContainer.appendChild(dot);
});

const dots = document.querySelectorAll('.deck-dot');

// Setup intersection observer to update dots on scroll snap
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.5 // Trigger when a slide is 50% visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Find the index of the intersecting slide
      const index = Array.from(slides).indexOf(entry.target);
      
      // Update active dot
      dots.forEach(dot => dot.classList.remove('active'));
      if(dots[index]) dots[index].classList.add('active');
      
      // Trigger GSAP animations for this slide
      const reveals = entry.target.querySelectorAll('.gsap-reveal, .gsap-reveal-left, .gsap-reveal-right');
      gsap.to(reveals, {
        opacity: 1,
        y: 0,
        x: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        overwrite: "auto"
      });
    }
  });
}, observerOptions);

// Initialize initial states for animations
slides.forEach(slide => {
  observer.observe(slide);
  
  // Set initial states for elements
  gsap.set(slide.querySelectorAll('.gsap-reveal'), { opacity: 0, y: 30 });
  gsap.set(slide.querySelectorAll('.gsap-reveal-left'), { opacity: 0, x: -30 });
  gsap.set(slide.querySelectorAll('.gsap-reveal-right'), { opacity: 0, x: 30 });
});

// 3D Tilt Effect Logic (Playful Animations)
const tiltCards = document.querySelectorAll('.tilt-card');

tiltCards.forEach(card => {
  const inner = card.querySelector('.tilt-inner');
  if (!inner) return;

  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // x position within the element.
    const y = e.clientY - rect.top;  // y position within the element.
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation based on mouse position relative to center
    // Max rotation is 15 degrees
    const rotateX = ((y - centerY) / centerY) * -15; 
    const rotateY = ((x - centerX) / centerX) * 15;
    
    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    inner.style.transition = 'none'; // Remove transition for smooth tracking
  });

  card.addEventListener('mouseleave', () => {
    // Snap back to 0 with a bouncy transition
    inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
    inner.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
  });
});

