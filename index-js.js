let num= 20
function convert(){
    let feet= num*3.2808
    let meters= num/3.2808
    let m=meters.toFixed(3)
    document.getElementById("length").textContent=  "20 Meters =  " +  feet + " Feet" + " | " + "20 Feet =  " + m + " Meters"

    let liters= num*3.78541
    let gallons = num*0.264172
    let g=gallons.toFixed(3)
    document.getElementById("volume").textContent=  "20 Liters =  " + g + " gallons" + " | " +" 20 Gallons =  " + liters + " liters"

    let pounds= num*2.2046
    let kilograms= num/2.2046
    let k=kilograms.toFixed(3)
    document.getElementById("mass").textContent=  "20 Kilograms =  " + pounds + " pounds" + " | " + " 20 Pounds =  " + k + " kilograms"
}