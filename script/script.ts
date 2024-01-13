// IMC = weight(kg) / (height(m) * height(m))
// Peso médio = imc * (height(m) * height(m))

const heightInput = document.querySelector('#height') as HTMLInputElement
const weightInput = document.querySelector('#weight') as HTMLInputElement
const submitInput = document.querySelector('#submit') as HTMLInputElement
const incompleteDataInput = document.querySelector('#incomplete-data') as HTMLElement

const resultTextArea = document.querySelector('#result-txt-area') as HTMLElement

const thinElement = document.querySelector('#thin') as HTMLElement
const normalElement = document.querySelector('#normal') as HTMLElement
const overweightElement = document.querySelector('#overweight') as HTMLElement
const obesityElement = document.querySelector('#obesity') as HTMLElement

const thinLineElement = document.querySelector('#thin-line') as HTMLElement
const normalLineElement = document.querySelector('#normal-line') as HTMLElement
const overweightLineElement = document.querySelector('#overweight-line') as HTMLElement
const obesityLineElement = document.querySelector('#obesity-line') as HTMLElement

interface calcImcProps {
  height: number,
  weight: number
}

function calcImc({ height, weight }: calcImcProps) {
  const imc = weight / (height ** 2)

  const minNormalWeight = 18.5 * Math.pow(height, 2)
  const maxNormalWeight = 24.9 * Math.pow(height, 2)
  const maxOverweight = 30 * Math.pow(height, 2)

  return { imc, minNormalWeight, maxNormalWeight, maxOverweight }
}


interface imcDataProps {
  imc: number,
  minNormalWeight: number,
  maxNormalWeight: number,
  maxOverweight: number
}

function resultText({ imc, minNormalWeight, maxNormalWeight }: imcDataProps) {
  let messageData: string[] = ['dentro', 'manter']

  if (imc < 18.5) {
    messageData = ['abaixo', 'atingir']
  }

  if (imc > 24.9) {
    messageData = ['acima', 'atingir']
  }

  let message = `De acordo com a Organização Mundial da Saúde, seu IMC está ${messageData[0]}
  do recomendado para a sua altura. Para ${messageData[1]} um valor de IMC normal, seu peso deve
   estar entre ${minNormalWeight.toFixed(2)} e ${maxNormalWeight.toFixed(2)} kg.`

  return message
}

function bgYellowTable({ imc }: imcDataProps) {
  if (imc < 18.5) {
    thinLineElement.classList.add("yellow")
    normalLineElement.classList.remove("yellow")
    overweightLineElement.classList.remove("yellow")
    obesityLineElement.classList.remove("yellow")
    return
  }

  if (imc < 24.9) {

    normalLineElement.classList.add("yellow")
    thinLineElement.classList.remove("yellow")
    overweightLineElement.classList.remove("yellow")
    obesityLineElement.classList.remove("yellow")
    return
  }

  if (imc < 30) {

    overweightLineElement.classList.add("yellow")
    normalLineElement.classList.remove("yellow")
    thinLineElement.classList.remove("yellow")
    obesityLineElement.classList.remove("yellow")
    return
  }

  if (imc >= 30) {

    obesityLineElement.classList.add("yellow")
    normalLineElement.classList.remove("yellow")
    thinLineElement.classList.remove("yellow")
    overweightLineElement.classList.remove("yellow")
    return
  }
}

function fillTable(currentImc: any) {

  resultTextArea.innerHTML = `<h2>Resultado:</h2>
  <p>Seu IMC é de <span class="bold">${currentImc.imc.toFixed(2)}</span></p>
  <p>${resultText(currentImc)}</p>`

  thinElement.innerText = `> ${currentImc.minNormalWeight.toFixed(2)} kg`
  normalElement.innerText = `${currentImc.minNormalWeight.toFixed(2)} a ${currentImc.maxNormalWeight.toFixed(2)} kg`
  overweightElement.innerText = `${currentImc.maxNormalWeight.toFixed(2)} a ${currentImc.maxOverweight.toFixed(2)} kg`
  obesityElement.innerText = `< ${currentImc.maxOverweight.toFixed(2)} kg`
}

submitInput.addEventListener('click', () => {
  const currentImc = calcImc({ height: Number(heightInput.value) / 100, weight: Number(weightInput.value) })

  if (!weightInput.value || !weightInput.value) {
    incompleteDataInput.innerHTML =
      '<h2 class="incomplete-data d-none">Preencha corretamente todos os dados</h2>'
    return
  }
  incompleteDataInput.innerHTML = ''

  fillTable(currentImc)
  bgYellowTable(currentImc)
})

submitInput.addEventListener('onchange', () => {
  const currentImc = calcImc({ height: Number(heightInput.value) / 100, weight: Number(weightInput.value) })

  if (!weightInput.value || !weightInput.value) {
    incompleteDataInput.innerHTML =
      '<h2 class="incomplete-data d-none">Preencha corretamente todos os dados</h2>'
    return
  }
  incompleteDataInput.innerHTML = ''

  fillTable(currentImc)
  bgYellowTable(currentImc)
})


