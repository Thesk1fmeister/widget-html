const openBtn = document.querySelector('.btn.open')
openBtn.style.display = 'none'
const closeBtn = document.querySelector('.btn.close')

const widget = document.querySelector('.widget')

openBtn.addEventListener('click', () => {
  widget.style.display = 'block'
  openBtn.style.display = 'none'
  closeBtn.style.display = 'block'
})

closeBtn.addEventListener('click', () => {
  widget.style.display = 'none'
  closeBtn.style.display = 'none'
  openBtn.style.display = 'block'
})
