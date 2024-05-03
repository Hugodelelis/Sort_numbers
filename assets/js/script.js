const numberMin = document.querySelector('#numberMin')
const numberMax = document.querySelector('#numberMax')
const sortButton = document.querySelector('#sort')

function sortNumber(min, max) {
    const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroAleatorio
}

sortButton.addEventListener('click', function() {
    const minValue = parseInt(numberMin.value)
    const maxValue = parseInt(numberMax.value)
    const sort = sortNumber(minValue, maxValue)
    document.querySelector('#result').innerHTML = sort
})
