const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const nav = document.querySelector('#nav')
const picture = document.querySelector('#picture')
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

prev.addEventListener('click', ()=>{
  if(index === 0) {
    index = content.length - 1
  } else {
    index--
  }
  const {image, heading,text,alt} = content[index]
console.log(image, heading, text, alt)
  picture.innerHTML = `
    <source media="(min-width:600px)" srcset='./assets/images/desktop-${image}'>
    <source media="(max-width:600px)" srcset='./assets/images/mobile-${image}.jpg'>
    <img class="image" src="./assets/images/mobile-${image}" alt="${alt}">
  `
  head.textContent = `${heading}`
  introText.textContent = `${text}`

})

next.addEventListener('click', ()=>{
  if (index === content.length - 1) {
    index = 0
  } else {
    index++
  }
  const { image, heading, text, alt } = content[index]
  console.log(image, heading, text, alt)
  picture.innerHTML = `
      <source media="(min-width:600px)" srcset='./assets/images/desktop-${image}'>
      <source media="(max-width:600px)" srcset='./assets/images/mobile-${image}.jpg'>
      <img class="image" src="./assets/images/mobile-${image}" alt="${alt}">
    `
  head.textContent = `${heading}`
  introText.textContent = `${text}`
})

