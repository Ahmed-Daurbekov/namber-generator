let numbersAmount = document.querySelector('.range');
let numbersAmountText = document.querySelector('.count-namber__text span')
let input = document.querySelectorAll('.input');
// -генерация числа при загрузки документа- 
document.addEventListener('DOMContentLoaded', () => {
    let min = +document.querySelector('.minValue').value;
    let max = +document.querySelector('.maxValue').value;
    let previousNumber = document.querySelector('.previous-date__number');
    previousNumber.innerHTML = localStorage.getItem('previous');
    localStorage.clear()
    let currentNumber = document.querySelector('.current-date__number');
    let currentDate = Math.floor(Math.random() * (max - min)) + min;
    currentNumber.innerHTML = currentDate;
    localStorage.setItem('previous', currentDate)
    let ipt1 = document.querySelector('.minValue').value;
    let ipt2 = document.querySelector('.maxValue').value;
    if(ipt1 != '') {
        document.querySelector('label[for="num1"]').classList.add('active')
    } 
    if(ipt2 != '') {
        document.querySelector('label[for="num2"]').classList.add('active')
    } 
})
// -min и max active при заполнение поля input-
function labelCheckFocus() {
    if(this.value != '') {
        this.select();
    }

    this.parentElement.querySelector('label').classList.add('active')
}
function labelCheckBlur() {
    if(this.value === '' && this.value.trim() === '') {
        this.parentElement.querySelector('label').classList.remove('active')

        return
    }
}
input.forEach(item => {
    item.addEventListener('focus', labelCheckFocus)
    item.addEventListener('blur', labelCheckBlur)
})
// -генерация числа при клики на кнопку-
document.querySelector('.btn').addEventListener('click', () => {
    if(+numbersAmountText.textContent === 1) {
        let min = +document.querySelector('.minValue').value;
        let max = +document.querySelector('.maxValue').value;
        let checkbox = document.querySelector('input[type="checkbox"]');
        let previousNumber = document.querySelector('.previous-date__number');
        previousNumber.innerHTML = localStorage.getItem('previous');
        let currentNumber = document.querySelector('.current-date__number');
        let currentDate = Math.floor(Math.random() * (max - min)) + min;
            if(checkbox.checked) {
                if(localStorage.getItem('previous') == currentDate) {
                    currentDate = currentDate + 1
                }
            } else {
                currentDate = currentDate
            }
        localStorage.clear()
        currentNumber.innerHTML = currentDate;
        localStorage.setItem('previous', currentDate)
    } else {
        let min = +document.querySelector('.minValue').value;
        let max = +document.querySelector('.maxValue').value;
        let checkbox = document.querySelector('input[type="checkbox"]');
        let previousNumber = document.querySelector('.previous-date__number');
        previousNumber.innerHTML = localStorage.getItem('previous');
        let currentNumber = document.querySelector('.current-date__number');
        let arr = [];
        for(let i = 0; i < +numbersAmountText.textContent; i++) {
            let currentDate = Math.floor(Math.random() * (max - min)) + min;
            if(checkbox.checked) {
                if(localStorage.getItem('previous') == currentDate) {
                    currentDate = currentDate + 1
                }
            } else {
                currentDate = currentDate
            }
            arr.push(currentDate)
        }
        localStorage.clear()
        currentNumber.innerHTML = arr.join(' ')
        localStorage.setItem('previous', arr.join(' '))
    }
})
// -повтор числа-
document.querySelectorAll('.switch-btn').forEach(item => {
    item.addEventListener('click', () => {
        let checkbox = document.querySelector('input[type="checkbox"]');
        if(!checkbox.checked) {
            checkbox.checked = true
        } else {
            checkbox.checked = false
        }
    })
})
// -изменение ползунка-
numbersAmount.addEventListener('input', () => {
    numbersAmountText.innerHTML = numbersAmount.value
    if(numbersAmount.value > 1) {
        let checkbox = document.querySelector('input[type="checkbox"]');
        checkbox.style.visibility = 'hidden'
        document.querySelectorAll('.switch-btn').forEach(item => {
            item.style.visibility = 'hidden'
        })
        document.querySelector('.count-namber__text i').innerHTML = 'случайных чисел'
    } else {
        let checkbox = document.querySelector('input[type="checkbox"]');
        checkbox.style.visibility = 'visible'
        document.querySelectorAll('.switch-btn').forEach(item => {
            item.style.visibility = 'visible'
        })
        document.querySelector('.count-namber__text i').innerHTML = 'случайное число'

    }
})