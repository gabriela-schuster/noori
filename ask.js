let boxes = document.querySelectorAll('.questions-boxes .box')
let res = document.querySelector('.res')

for(let box of boxes) {
  box.addEventListener('click', handleP)
}

function handleP(e) {
  let active = null

  if (e.target.classList.contains("p1")) {
    res.innerHTML = '1'
    active = 'p1'
  } else if (e.target.classList.contains("p2")) {
    res.innerHTML = '2' 
    active = 'p2'
  } else if(e.target.classList.contains("p3")) {
    res.innerHTML= '3'
    active = 'p3'
  }

  handleActive(active, e)
}

function handleActive(active, e) {
  deactivate(active, e)

  if(e.target.classList.contains('h3')) {
    e.target.parentNode.classList.add('bgBold')
  } else {
    e.target.classList.add('bgBold')
  }
}

function deactivate(active, e) {
  targets = ['p1', 'p2', 'p3']
  
  for(let target of targets) {
    if(target !== active) {
      document.querySelector(`.${target}`).classList.remove('bgBold')
    }
  }
}