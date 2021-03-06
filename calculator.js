
'use strict'

const clock= document.querySelector('.timer')
const changeMood=document.querySelector('.change-mood')
const changeBtn=document.querySelector('.change-mood__btn')
const body= document.querySelector('.calculator')
const input= document.querySelector('.showResult')


//button
const numberKeys=document.querySelectorAll('.number-btn')
const operatorKeys=document.querySelectorAll('.operator-btn')
const clear=document.querySelector('.C-key')
const result=document.querySelector('.result-key')
const plusMinus=document.querySelector('.plusMinus-key')
const back=document.querySelector('.back-key')
const Percentage=document.querySelector('.Percentage-key')
const Dot=document.querySelector('.dot-btn')
// const btn= document.querySelectorAll('.btn')





let setTime = ()=>{
    let universalTime= new Date();
    clock.textContent= `${universalTime.getHours()} : ${universalTime.getMinutes()}`
}

setInterval(setTime, 1000)


//dark mood
changeMood.addEventListener('click', ()=>{
    let btnHeight= changeBtn.style.top
    if ( btnHeight && btnHeight!=='4px'){
        changeBtn.style.top='4px'
        body.classList.remove('dark')
    }else {
        changeBtn.style.top='28px'
        body.classList.add('dark')
    }
})


//keys Operation
numberKeys.forEach(num =>{
    num.addEventListener('click', ()=>{
        input.value += num.textContent
    })
})


Dot.addEventListener('click', ()=>{
    // if (input.value.includes(".")) alert(`is not allowed  "." Already entered`)
    // else input.value += Dot.textContent
    input.value += Dot.textContent
})


operatorKeys.forEach(operator =>{
    operator.addEventListener('click', ()=>{
        input.value += operator.textContent
    })
})

//c-key
clear.addEventListener('click', ()=>{
    input.value= ""
})

//result
result.addEventListener('click', ()=>{
    input.value= eval(input.value)
})

//plus-minus
plusMinus.addEventListener('click', ()=>{
    input.classList.toggle('Negative')
    if(input.className.includes('Negative')){
        input.value= "-" + input.value
    }
    else{
        input.value= input.value.slice(1);
    }
})

//back
back.addEventListener('click', ()=>{
    input.value= input.value.slice(0, (input.value.length-1))
})

// % operator
Percentage.addEventListener('click', ()=>{
    let value=input.value
    if (Number(value)){
        input.value = Number(value)/100
    }
    else {
        let secondNumber = input.value.slice(input.value.length-1)
        let mainNumber = input.value.slice(0,input.value.length-2)
        input.value = input.value.slice(0,input.value.length-1)
        input.value += mainNumber * secondNumber / 100
    }

})

