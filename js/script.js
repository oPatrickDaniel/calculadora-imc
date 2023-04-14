
// IMC = weight / (height * height)

function imcDatas() {
    // calculo imc
    let weight = document.getElementsByName("weight")[0].value
    let height = document.getElementsByName("height")[0].value

    let imc = parseInt(weight) / ((parseInt(height) / 100) ** 2)

    // calculo peso mínimo, normal e máximo
    let minWeight = parseInt(weight) / imc * 18.5
    let normalWeight = parseInt(weight) / imc * 24.9
    let maxWeight = parseInt(weight) / imc * 30

    let obj = {
        imc: imc.toFixed(1),
        minWeight: minWeight.toFixed(1),
        normalWeight: normalWeight.toFixed(1),
        maxWeight: maxWeight.toFixed(1)
    }

    return obj
}

function innerResult() {
    // resultado
    let result = document.getElementById("result")
    result.innerHTML = imcDatas().imc + ' kg/m2.'

    // descrição do resultado
    let status = document.getElementsByClassName("imcStatus")
    let media = document.getElementById("imcMedia")

    if (imcDatas().imc < 18.5) {

        status[0].innerText = 'abaixo 1 '
        status[1].innerText = 'atingir'
        media.innerText = imcDatas().minWeight +
            ' a ' + imcDatas().normalWeight + ' Kg'

    } else if (imcDatas().imc < 24.9) {

        status[0].innerText = 'dentro'
        status[1].innerText = 'manter'
        media.innerText = imcDatas().minWeight +
            ' a ' + imcDatas().normalWeight + ' Kg'

    } else if (imcDatas().imc < 30) {

        status[0].innerText = 'acima'
        status[1].innerText = 'atingir'
        media.innerText = imcDatas().minWeight +
            ' a ' + imcDatas().normalWeight + ' Kg'

    } else {

        status[0].innerText = 'acima 4'
        status[1].innerText = 'atingir'
        media.innerText = imcDatas().minWeight +
            ' a ' + imcDatas().normalWeight + ' Kg'
    }
}

function innerTable() {
    // mudança de cor para amarelo
    let thin = document.getElementById("thin")
    let normal = document.getElementById("normal")
    let overweight = document.getElementById("overweight")
    let obesity = document.getElementById("obesity")

    if (imcDatas().imc < 18.5) {

        thin.classList.add("yellow");
        normal.classList.remove("yellow");
        overweight.classList.remove("yellow");
        obesity.classList.remove("yellow");

    } else if (imcDatas().imc < 24.9) {

        normal.classList.add("yellow");
        thin.classList.remove("yellow");
        overweight.classList.remove("yellow");
        obesity.classList.remove("yellow");

    } else if (imcDatas().imc < 30) {

        overweight.classList.add("yellow");
        normal.classList.remove("yellow");
        thin.classList.remove("yellow");
        obesity.classList.remove("yellow");

    } else {

        obesity.classList.add("yellow");
        normal.classList.remove("yellow");
        thin.classList.remove("yellow");
        overweight.classList.remove("yellow");
    }
}

function innerTableTd() {
    // preenchimento da table
    let weightMargin = document.getElementsByClassName("weightMargin")

    if (imcDatas().imc < 18.5) {

        weightMargin[0].innerText = "< " + imcDatas().minWeight + " Kg"

    } else if (imcDatas().imc < 24.9) {

        weightMargin[1].innerText = imcDatas().minWeight + " a " +
            imcDatas().normalWeight + " Kg"

    } else if (imcDatas().imc < 30) {

        weightMargin[2].innerText = imcDatas().normalWeight + " a " +
            imcDatas().maxWeight + " Kg"

    } else {

        weightMargin[2].innerText = "< " + imcDatas().maxWeight + " Kg"

    }
}

function removeDisplayNone() {
    let displayNone1 = document.getElementById("displayNone1")
    let displayNone2 = document.getElementById("displayNone2")

    if (!isNaN(imcDatas().imc)) {

        displayNone2.classList.remove("displayNone");
        displayNone1.classList.add("displayNone");
        console.log(imcDatas().imc)

    } else {
        displayNone1.classList.remove("displayNone");
        displayNone2.classList.add("displayNone");
        console.log(imcDatas().imc)
    }
}

function innerHtml() {
    innerResult()
    innerTable()
    innerTableTd()
    removeDisplayNone()
}