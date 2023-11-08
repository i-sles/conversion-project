/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

// Take number from element and convert to different units using different formulas
const numEl = document.getElementById("convert-num")
const numBer = Number(numEl.innerHTML)
const convertBtn = document.getElementById("convert-btn")

//Selectors for converted numbers
const meterText = document.getElementById("meter-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")

//Convert button functionality
convertBtn.addEventListener("click", () => {
    const numEl = document.getElementById("convert-num");
    const num = Number(numEl.value);
    clickButton(num);
});


function clickButton(num) {
    //meter to feet - first section
    const meterFtNum = meterToFeet(num)
    const feetMtNum = feetToMeter(num)
    
    meterText.innerHTML = `${num} meters = ${meterFtNum} feet | ${num} feet = ${feetMtNum} meters`
    
    //gallons to liters - second section
    const literGalNum = litersToGallons(num)
    const galLitNum = gallonsToLiters(num)
    
    volumeText.innerHTML = `${num} gallons = ${literGalNum} liters | ${num} liters = ${galLitNum} gallons`
    
    //kilograms to pounds - third section
    const kiloLbNum = kiloToPounds(num)
    const poundKiloNum = poundsToKilo(num)
    
    massText.innerHTML = `${num} kilo = ${kiloLbNum} | ${num} pounds = ${poundKiloNum}`
}



//Calculations of each conversion
function meterToFeet(num) {
    num = num * 3.281
    return num.toFixed(3)
}

function feetToMeter(num) {
    num = num / 3.281
    return num.toFixed(3)
}

function litersToGallons(num) {
    num = num * 0.264
    return num.toFixed(3)
}

function gallonsToLiters(num) {
    num = num / 0.264
    return num.toFixed(3)
}

function kiloToPounds(num) {
    num = num * 2.204
    return num.toFixed(3)
}

function poundsToKilo(num) {
    num = num / 2.204
    return num.toFixed(3)
}