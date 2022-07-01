let infoTecnica = document.querySelector('.area-text-2-1')
let modal = document.querySelector('.modal-js')
let buttonModal = document.querySelector('.modal-button')
let body = document.querySelector('body')

infoTecnica.addEventListener('click', (item)=> {
    modal.style.display = 'flex'
    body.style.overflow = 'hidden'
})
buttonModal.addEventListener('click', (item)=> {
    modal.style.display = 'none'
    body.style.overflow = 'auto'
})