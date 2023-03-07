const sections = document.querySelectorAll('section')
const navlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
  sections.forEach((section) => {
    const top = window.scrollY
    const offset = section.offsetTop - 150
    const height = section.offsetHeight;
    const id = section.getAttribute('id')

    if(top >= offset && top < offset + height) {
      navlinks.forEach((links) => {
        links.classList.remove('active')

        const link = `header nav a[data-target*="${id}"]`
        
        document.querySelector(link)?.classList.add('active')
      })
    }

  })
}