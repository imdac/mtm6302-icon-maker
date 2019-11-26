const colors = ['red', 'blue', 'green', 'purple', 'orange', 'gold', 'grey', 'black']
const icons = ['forbidden', 'printer', 'menu', 'bell', 'briefcase', 'calendar', 'camera', 'microphone']

const maker = {
  icon: 'forbidden',
  color: 'black'
}

const $icon = document.getElementById('icon')
const $icons = document.getElementById('icons')
const $colors = document.getElementById('colors')

// Event Listeners
function createIcon () {
  $icon.className = `icon-${maker.icon}-${maker.color}`
}

$icons.addEventListener('click', function (e) {
  if (e.target.dataset.icon) {
    maker.icon = e.target.dataset.icon
    createIcon()
  }
})

$colors.addEventListener('click', function (e) {
  if (e.target.dataset.color) {
    maker.color = e.target.dataset.color
    createIcon()
  }
})
