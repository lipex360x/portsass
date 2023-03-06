import scrollIntoView from 'scroll-into-view'
import ScrollReveal from 'scrollreveal'

const navigations = document.querySelectorAll('.navigation')

navigations.forEach((navigation) => {
  navigation.addEventListener('click', () => {
    const domParser = navigation as HTMLElement
    const domElement = domParser.dataset.target as string
    const element = document.getElementById(domElement)

    scrollIntoView(element!, { time: 0 });
  })
});

ScrollReveal({ reset: true });
ScrollReveal().reveal('#about', { delay: 300 });
ScrollReveal().reveal('#about .about-img', { delay: 400 });
ScrollReveal().reveal('#about .about-content', { delay: 700, origin: 'right', distance: '50px' });
