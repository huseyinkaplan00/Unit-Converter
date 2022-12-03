const input = document.getElementById("input")
const convertBtn = document.getElementById("convertBtn")

const paragOne = document.getElementById("paragOne")
const paragTwo = document.getElementById("paragTwo")
const paragThree = document.getElementById("paragThree")
const darkMode = document.querySelector(".darkMode")
const mainBox = document.querySelector(".main-box")

const boxes = document.querySelector(".box")
const boxOne = document.querySelector(".boxOne")
const boxTwo = document.querySelector(".boxTwo")
const boxThree = document.querySelector(".boxThree")


let title = document.querySelector("#titleOne")
let titleTwo = document.querySelector("#titleTwo")
let titleThree = document.querySelector("#titleThree")



convertBtn.addEventListener("click", function () {
    let meter = input.value * 3.281
    let feet = input.value * 0.304;
    let liter = input.value * 3.785
    let galon = input.value * 0.264172
    let kilos = input.value * 2.20462262
    let pounds = input.value * 0.45359237
    const inputValue = input.value
    let convertOne = `${inputValue} meters  = ${meter.toFixed(3)} feet | ${inputValue} feet = ${feet.toFixed(3)} meters`
    let convertTwo = `${inputValue} liters = ${galon.toFixed(3)}  gallons | ${inputValue} gallons = ${liter.toFixed(3)} liters`
    let convertThree = `${inputValue} kilos = ${kilos.toFixed(3)} pounds | ${inputValue} pounds = ${pounds.toFixed(3)} kilos`

    paragOne.innerHTML = convertOne
    paragTwo.innerHTML = convertTwo
    paragThree.innerHTML = convertThree
})

darkMode.addEventListener("click", function () {
    mainBox.classList.toggle("black")
    darkMode.classList.toggle("lightMode")
    boxOne.classList.toggle("boxOne")
    boxTwo.classList.toggle("boxTwo")
    boxThree.classList.toggle("boxThree")

    paragOne.classList.toggle("colorWhite")
    paragTwo.classList.toggle("colorWhite")
    paragThree.classList.toggle("colorWhite")

    title.classList.toggle("colorWhite")
    titleTwo.classList.toggle("colorWhite")
    titleThree.classList.toggle("colorWhite")

})



