let infoArea = document.getElementById('info')
let inputForm = document.querySelector('#number')
let minus = document.querySelector('#minus')
let plus = document.querySelector('#plus')

plus.addEventListener('click', function(){
    let result = parseInt(infoArea.textContent) + parseInt(inputForm.value)
    document.getElementById('info').textContent = result
})

minus.addEventListener('click', function(){
    let result = parseInt(infoArea.textContent) - parseInt(inputForm.value)
    document.getElementById('info').textContent = result

    if (result < 0) {
        infoArea.style.color = "red";
    } else if (result > 0) {
        infoArea.style.color = "black";
    }
})