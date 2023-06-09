const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const nav = document.querySelector('#nav')
const navbar = document.querySelector('.navbar')
const picture = document.querySelector('#picture')
const container = document.querySelector('#container')
const prev = document.querySelector('#prev')
const next = document.querySelector('#next')
const head = document.querySelector('#heading')
const introText = document.querySelector('#intro-text')
let index = 0


const content = [
  {
    image: 'image-hero-1.jpg',
    heading: 'Discover innovative ways to decorate',
    text: 'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    alt:'white Chairs'
  },
  {
    image: 'image-hero-2.jpg',
    heading: 'We are available all across the globe',
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    alt:'colorful chairs'
  },
  {
    image: 'image-hero-3.jpg',
    heading: 'Manufactured with the best materials',
    text: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
    alt:'a black chair'
  },
]

openBtn.addEventListener('click',()=>{
  nav.classList.toggle('nav-open')
})
closeBtn.addEventListener('click',()=>{
  nav.classList.toggle('nav-open')
})

window.addEventListener('scroll', ()=>{
  const posY = window.scrollY
  if(posY >= container.getBoundingClientRect().height-30){
    navbar.classList.add('bg-blur')
  }else {
    navbar.classList.remove('bg-blur')
  }
})

function updatePage(i){
  const { image, heading, text, alt } = content[i]

  picture.innerHTML = `
      <source media="(min-width:600px)" srcset='./assets/images/desktop-${image}'>
      <source media="(max-width:600px)" srcset='./assets/images/mobile-${image}'>
      <img class="image" src="./assets/images/mobile-${image}" alt="${alt}">
    `
  head.textContent = `${heading}`
  introText.textContent = `${text}`
}

function slide(picX, othersX) {
  if (index === content.length - 1) {
    index = 0
  } else {
    index++
  }
  updatePage(index)
  // animation
  gsap.from('.picture', { 
    x: picX,  
    duration: 1, 
    ease: 'power4.out',
    opacity:0.5
  })

  const width = container.getBoundingClientRect().width

  if(width > 570){
    gsap.from('#heading, #intro-text, .cta', {
      y: '-100%',
      stagger: 0.2,
      ease: 'power4.out',
      delay:0.5,
      opacity:0,
      scale:0
    })
  } else {
    gsap.from('#heading, #intro-text, .cta', {
      x: othersX,
      ease: 'power4.out',
      delay:0.1,
      duration:1,
      opacity:0
    })
  }
}


next.addEventListener('click', ()=> slide('-100vw','100%'))
next.addEventListener('wheel', ()=> slide('-100vw','100%'))
prev.addEventListener('click', ()=> slide('100vw','-100%'))
prev.addEventListener('wheel', ()=> slide('100vw','-100%'))


