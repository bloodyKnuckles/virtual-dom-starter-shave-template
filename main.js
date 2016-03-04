//var h = require('virtual-dom/h')
var main = require('main-loop')
var shaved = require('shave-template')

var template = fs.readFileSync('public/template.html', 'utf-8')

var loop = main({ n: 0 }, render, require('virtual-dom'))
document.querySelector('#content').appendChild(loop.target)

function render (state) {
  return shaved(template, {
    '#count': state.n,
    'button': {onclick: onclick}
  })
  function onclick () {
    loop.update({ n: state.n + 1 })
  }
}
