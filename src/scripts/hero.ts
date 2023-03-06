import Typed, { TypedOptions } from 'typed.js'

const options: TypedOptions = {
  strings: ['Frontend Developer', 'Backend Developer', 'Blogger'],
  typeSpeed: 60,
  backSpeed: 20,
  backDelay: 2000,
  loop: true,
}

export const typed = new Typed('.multi-text', options)
