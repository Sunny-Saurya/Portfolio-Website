const header = document.querySelector("header");
const hamburgerBtn = document.querySelector("#hamburger-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");

// Toggle mobile menu on hamburger button click
hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

// Close mobile menu on close button click
closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());


// write my name in loop

// document.addEventListener("DOMContentLoaded", () => {

//     const textElement = document.getElementById("looping-text");
//     const text = "SUNNY KUMAR";
//     let index = 0;

//     function writeText() {
//         textElement.innerText = text.slice(0, index);

//         index++;

//         if (index > text.length) {
//             index = 0;
//         }

//         setTimeout(writeText, 200); // Adjust the speed by changing the timeout value
//     }

//     writeText();
// });



// nav bar animation

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

// main text of landing page animaton

gsap.from(".content h1", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out"
  });
  
  gsap.from("#subheading", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out",
    delay: 0.5
  });
  
  gsap.from(".search-form", {
    duration: 1,
    opacity: 0,
    y: -50,
    ease: "power3.out",
    delay: 1
  });
  
  gsap.from("#btn", {
    duration: 2,
    opacity: 0,
    scale: 0.5,
    ease: "back.out(1.7)",
    delay: 1.5
  });
  

//   footer animation

gsap.from(".footer-container", {
    duration: 1,
    opacity: 0,
    y: 50,
    ease: "power3.out"
  });
  
  gsap.from(".footer-about", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power3.out",
    delay: 0.5
  });
  
  gsap.from(".footer-links", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power3.out",
    delay: 0.7
  });
  
  gsap.from(".footer-social", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power3.out",
    delay: 0.9
  });
  
  gsap.from(".footer-bottom", {
    duration: 1,
    opacity: 0,
    y: 20,
    ease: "power3.out",
    delay: 1.1
  });
  

//   bg image
gsap.from(".hero-section", {
    duration: 1.5,
    opacity: 0,
    ease: "power2.inOut"
  });

// GSAP animations for hamburger menu
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


function breakTheText() {
  var h1 = document.querySelector("#logo")

  var h1Text = h1.textContent

  var splittedText = h1Text.split("")
  var halfValue = splittedText.length / 2

  var clutter = " "

  // splittedText.forEach(function(elem){
  //     clutter += `<span>${elem}</span>`
  // })

  splittedText.forEach(function (elem, idx) {
      if (idx < halfValue) {
          clutter += `<span class="left">${elem}</span>`

      }
      else
      {
          clutter += `<span class="right">${elem}</span>`

      }

      h1.innerHTML = clutter
  })
}

breakTheText()

// gsap.from("#logo span", {
//         y: 70,
//         stagger: 0.1,
//         duration: 0.5,
//         ease: "power2.out"
//     })

gsap.from("#logo .left",{
  y:80,
  duration:0.6,
  delay:0.5,
  repeat:-1,
  stagger:0.15,
  opacity:0,
})
gsap.from("#logo .right",{
  y:80,
  duration:0.6,
  delay:0.5,
  repeat:-1,
  stagger:-0.15,
  opacity:0,
})