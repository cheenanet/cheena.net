import $ from 'jquery'
import 'popper.js'
import 'bootstrap'
import Typed from 'typed.js'

window.jQuery = $
window.$ = $

new Typed('.typed-string', {
  stringsElement: '#typed-strings',
  typeSpeed: 20,
  startDelay: 1000,
  backDelay: 2000,
  loop: true
})
