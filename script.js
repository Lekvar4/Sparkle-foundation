// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.querySelector('.mobile-menu-toggle');
  const menuClose = document.querySelector('.mobile-menu-close');
  const mobileMenu = document.querySelector('.mobile-menu');
  
  menuToggle.addEventListener('click', function() {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
  
  menuClose.addEventListener('click', function() {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
  
  // Close menu when clicking on a link
  const mobileLinks = document.querySelectorAll('.mobile-menu-links a');
  mobileLinks.forEach(link => {
    link.addEventListener('click', function() {
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Simple Testimonial Slider (can be expanded)
const testimonials = [
  {
    quote: "Foundation transformed our digital presence and helped us connect with our ideal customers. Our ROI has never been better.",
    author: "Sarah Johnson, CEO of Glow Skincare"
  },
  {
    quote: "Working with Foundation has been a game-changer for our brand. They understand the beauty industry inside and out.",
    author: "Michael Chen, Marketing Director at Pure Elements"
  },
  {
    quote: "The team at Foundation helped us launch our new product line with incredible success. They exceeded all our expectations.",
    author: "Emma Williams, Founder of Eco Beauty"
  }
];

let currentTestimonial = 0;
const testimonialElement = document.querySelector('.testimonial');

// Only initialize if testimonial element exists
if (testimonialElement) {
  // Set initial testimonial
  updateTestimonial();
  
  // Change testimonial every 5 seconds
  setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % testimonials.length;
    updateTestimonial();
  }, 5000);
  
  function updateTestimonial() {
    const testimonial = testimonials[currentTestimonial];
    
    // Fade out
    testimonialElement.style.opacity = 0;
    
    // Update content after fade out
    setTimeout(() => {
      testimonialElement.innerHTML = `
        <p class="quote">"${testimonial.quote}"</p>
        <p class="author">${testimonial.author}</p>
      `;
      
      // Fade in
      testimonialElement.style.opacity = 1;
    }, 300);
  }
  
  // Add transition for fade effect
  testimonialElement.style.transition = 'opacity 0.3s ease';
}