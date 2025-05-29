 var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
    for(tablink of tablinks){
      tablink.classList.remove("active-link");
    }
     for(tabcontent of tabcontents){
      tabcontent.classList.remove("active-tab");
    }
   event.currentTarget.classList.add("active-link");
   document.getElementById(tabname).classList.add("active-tab");
  }
/*-------------toggle icon navbar----------------*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('fa-x');
  navbar.classList.toggle('active');
};
  /*-------------scroll section active link----------------*/

  let sections = document.querySelectorAll('section');
  let navLinks = document.querySelectorAll('header nav a');

  window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
  /*-------------------------------- sticky navbar -----------------------------------------*/

  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

/*-------------remove toggle icon and navbar when click navbar link(scroll)----------------*/
 menuIcon.classList.remove('fa-x');
 navbar.classList.remove('active');
};
 /*-------------------------------- scroll reveal -----------------------------------------*/
   ScrollReveal({
     reset: true,
     distance: '80px',
     duration: 2000,
     delay: 200
     });

     ScrollReveal().reveal('.hero-text, .heading', { origin: 'top' });
      ScrollReveal().reveal('.hero-image, .project-box, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.hero-text h3, .hero-img, .contact-left', { origin: 'left' });
          ScrollReveal().reveal('.hero-text h1, .about-text', { origin: 'right' });