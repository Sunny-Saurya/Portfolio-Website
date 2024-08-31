document.addEventListener('DOMContentLoaded', () => {
    const readMoreLinks = document.querySelectorAll('.read-more');

    readMoreLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const post = link.closest('.post');
            const moreContent = post.querySelector('.more-content');
            if (moreContent.style.display === 'none' || moreContent.style.display === '') {
                moreContent.style.display = 'block';
                link.textContent = 'Read Less';
            } else {
                moreContent.style.display = 'none';
                link.textContent = 'Read More';
            }
        });
    });
});

const header = document.querySelector("header");
    const hamburgerBtn = document.querySelector("#hamburger-btn");
    const closeMenuBtn = document.querySelector("#close-menu-btn");

    // Toggle mobile menu on hamburger button click
    hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

    // Close mobile menu on close button click
    closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

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
      
      
