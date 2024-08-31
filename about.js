const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

// Animate the h2 element inside .about-us

gsap.registerPlugin(ScrollTrigger);

gsap.from(".project-card", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  stagger: 0.2,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".projects-section",
    start: "top 80%",
    end: "bottom 20%",
    scrub: true,
    toggleActions: "play none none reset",
  }
});

gsap.from(".projects-section h2", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "back.out(1.7)",
  scrollTrigger: {
    trigger: ".projects-section h2",
    start: "top 90%",
    end: "bottom 10%",
    scrub: true,
    toggleActions: "play none none reset",
  }
});

// // services animation

gsap.from(".service-card", {
  scrollTrigger: {
    trigger: ".services-section",
    start: "top bottom",
    end: "bottom top",
    scrub: true,
    markers: false
  },
  opacity: 0,
  scale: 0.8,
  stagger: 0.2,
  duration: 1,
  ease: "back.out(1.7)"
});

gsap.from(".navbar h3",{
    
  duration: 1,
  opacity: 0,
  y: -20,
  ease: "power3.out",
  stagger: 0.2
  })
  
  gsap.from(".menu-links li",{
  
  duration: 1,
    opacity: 0,
    y: -20,
    ease: "power3.out",
    stagger: 0.2
  
  
  })
  

const hamburger = document.querySelector("#hamburger-btn");

hamburger.addEventListener("click",function(){
  gsap.from(".menu-links li",{
    duration: 0.5,
    opacity: 0,
    // y: 20,
    x:-50,
    // ease: "power3.out",
    stagger:0.2,

  })
})


//  area of expertice
// Animate the card header
gsap.from(".cardHeader", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out"
});

// Animate the card items
gsap.from(".card-item", {
  scrollTrigger: {
    trigger: ".card-list",
    start: "top 80%", // Animation starts when the top of the card list is 80% from the top of the viewport
    end: "bottom 20%", // Animation ends when the bottom of the card list is 20% from the bottom of the viewport
    scrub: true
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".skillsHeader", {
  opacity: 0,
  y: -50,
  duration: 1,
  ease: "power2.out"
});

// Animate the skill cards
gsap.from(".skill-card", {
  scrollTrigger: {
    trigger: ".skills-list",
    start: "top 80%", // Animation starts when the top of the skills list is 80% from the top of the viewport
    end: "bottom 20%", // Animation ends when the bottom of the skills list is 20% from the bottom of the viewport
    scrub: true
  },
  opacity: 0,
  y: 50,
  stagger: 0.2,
  duration: 1,
  ease: "power2.out"
});


gsap.registerPlugin(ScrollTrigger);

    // Animate the image
    gsap.from(".image-section img", {
      scrollTrigger: {
        trigger: ".image-section img",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      opacity: 0,
      scale: 1.1,
      duration: 1
    });

    // Animate the text
    gsap.from(".image-text", {
      scrollTrigger: {
        trigger: ".image-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
      },
      opacity: 0,
      // x:1000,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });


// // about us

// gsap.from(".about-us .about", {
//   duration: 1,
//   opacity: 0,
//   scale: 0.5,
//   ease: "power2.out",
//   scrollTrigger: {
//     trigger: ".about-us",
//     start: "top 80%",
//     end: "bottom 20%",
//     scrub: true,
//   },
// });

// const cursor = document.querySelector('.cursor');

// window.addEventListener('mousemove', (e) => {
//   gsap.to(cursor, {
//     x: e.clientX,
//     y: e.clientY,
//     duration: 0.2,
//     ease: 'power2.out'
//   });
// });