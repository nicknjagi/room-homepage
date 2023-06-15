const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const nav = document.querySelector('#nav')

openBtn.addEventListener('click',()=>{
  nav.classList.toggle('nav-open')
})
closeBtn.addEventListener('click',()=>{
  nav.classList.toggle('nav-open')
})