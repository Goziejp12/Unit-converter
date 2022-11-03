const convertBtn = document.querySelector("#convertBtn")
const resetBtn = document.querySelector("#resetBtn")
const inputEl = document.querySelector("#input-field")
const lengthEl = document.querySelector("#length")
const volumeEl = document.querySelector("#volume")
const massEl = document.querySelector("#mass")
let htmlPart = "" 

convertBtn.addEventListener("click", function() {
    lengthConversion()
    volumeConversion()
    massConversion()
    inputEl.value = ""
})

/* .toFixed(3): for rounding off the value to 3 decimal places */

function lengthConversion() {
    htmlPart = `<p>${inputEl.value} meter(s) = ${(inputEl.value * 3.281).toFixed(3)} feet | 
    ${inputEl.value} feet = ${(inputEl.value / 3.281).toFixed(3)} meter(s)</p>`
    lengthEl.innerHTML += htmlPart
}

function volumeConversion() {
    htmlPart = `<p>${inputEl.value} liter(s) = ${(inputEl.value * 0.264).toFixed(3)} gallon(s) | 
    ${inputEl.value} gallon(s) = ${(inputEl.value / 0.264).toFixed(3)} liters(s)</p>`
    volumeEl.innerHTML += htmlPart
}

function massConversion() {
    htmlPart = `<p>${inputEl.value} kilo(s) = ${(inputEl.value * 2.204).toFixed(3)} pound(s) | 
    ${inputEl.value} pound(s) = ${(inputEl.value / 2.204).toFixed(3)} kilo(s)</p>`
    massEl.innerHTML += htmlPart
}