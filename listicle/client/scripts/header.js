console.log('header.js loaded')
//make header
const header = document.querySelector('header')

//make header container
const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

//make left and right container
const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerRight = document.createElement('div')
headerRight.className = 'header-right'

//put logo and Name in the left container
const logo = document.createElement('img')
//link to yc logo
logo.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Y_Combinator_logo.svg/1200px-Y_Combinator_logo.svg.png'
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