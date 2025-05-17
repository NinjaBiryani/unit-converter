const inputuser = document.getElementById("number-box"); 
const convertBtn = document.getElementById("convert-btn"); 

const descLength = document.getElementById("length-convert"); 
const descVolume= document.getElementById("volume-convert"); 
const descMass = document.getElementById("mass-convert"); 


convertBtn.addEventListener("click", function() {

    descLength.innerHTML = `${inputuser.value} meters = ${lengthConverterMeter(inputuser.value)} feet
                          | ${inputuser.value} feet = ${lengthConverterFeet(inputuser.value)} meters`; 

    descVolume.innerHTML = `${inputuser.value} liters = ${volumeConverterLiters(inputuser.value)} gallons
                          | ${inputuser.value} gallons = ${volumeConverterGallons(inputuser.value)} liters`; 

    descMass.innerHTML = `${inputuser.value} kilos = ${massConverterKilos(inputuser.value)} pounds
                          | ${inputuser.value} pounds = ${massConverterPounds(inputuser.value)} kilos`; 
})


function lengthConverterMeter(nr) {
    let nrFeet = (nr * 3.2808399).toFixed(3); 
    return nrFeet 
}

function lengthConverterFeet(nr) {
    let nrMeter = (nr / 3.2808399).toFixed(3);  
    return nrMeter
}

function volumeConverterLiters(nr) {
    let nrGallons = (nr * 3.78541178).toFixed(3); 
    return nrGallons
}

function volumeConverterGallons(nr) {
    let nrLiters = (nr / 3.78541178).toFixed(3); 
    return nrLiters
}

function massConverterKilos(nr) {
    let nrPounds = (nr *  2.20462262).toFixed(3); 
    return nrPounds 
}

function massConverterPounds(nr) {
    let nrKilos = (nr /  2.20462262).toFixed(3); 
    return nrKilos
}