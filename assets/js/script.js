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
    const result = document.querySelector('#result')
    if (minValue > maxValue) {
        result.style.color = 'red'
        return result.innerHTML = 'ERRO: O menor número é maior que o maior número!'
    } 
    
    if (!minValue && !maxValue) {
        result.style.color = 'red'
        return result.innerHTML = 'ERRO: Preencha os requisitos!'
    }

    if (minValue < 0 && maxValue > 0) {
        result.style.color = 'red'
        return result.innerHTML = 'ERRO: Não digite números negativos!'
    }
    
    result.style.color = 'white'
    return result.innerHTML = sort
})
