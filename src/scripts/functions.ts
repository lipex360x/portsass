import scrollIntoView from 'scroll-into-view'
const navigations = document.querySelectorAll('.navigation')

navigations.forEach((navigation) => {
  navigation.addEventListener('click', () => {
    const domParser = navigation as HTMLElement
    const domElement = domParser.dataset.target as string
    const element = document.getElementById(domElement)

    scrollIntoView(element!, { time: 300 });
  })
});
