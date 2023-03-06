import ScrollReveal from 'scrollreveal'

ScrollReveal({ reset: true });
ScrollReveal().reveal('#about', { delay: 200 });
ScrollReveal().reveal('#about .about-img', { delay: 300 });
ScrollReveal().reveal('#about .about-content', { delay: 400, origin: 'right', distance: '50px' });
