console.log('header.js loaded')

const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

//make left and right container
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

//put logo and Name in the left container
const logo = document.createElement('img')
logo.src = './yc-logo.png'
logo.className = 'logo'

const name = document.createElement('h1')
name.textContent = 'Listicle'
name.className = 'name'

headerLeft.appendChild(logo)
headerLeft.appendChild(name)

//Put Home in the right container
const home = document.createElement('a')
home.textContent = 'Home'
home.href = '/'
home.className = 'home'

headerRight.appendChild(home)

//Put the left and right container in the header container
headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

//Put the header container in the header
header.appendChild(headerContainer)

