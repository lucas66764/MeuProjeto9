const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')

// const modalWrapper = document.querySelector('.modal-wrapper')
// const modalMessage = document.querySelector('.modal .title span')
// const modalBtnClose = document.querySelector('.modal button.close')

const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.modal .title span'),
  buttonClose: document.querySelector('.modal button.close'),


  open() {
    modalWrapper.classList.add('open')
  },
  close() {
    modalWrapper.classList.remove('open')
  }
}



form.onsubmit = event => {
  event.preventDefault()

  const weight = inputWeight.value 
  const height = inputHeight.value

  

  const result = IMC(weight, height)
  const message= `Seu IMC é de ${result}`

  Modal.message.innerText = message
  Modal.open()

}

Modal.buttonClose.onclick = () => {
Modal.close()
}

function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}
