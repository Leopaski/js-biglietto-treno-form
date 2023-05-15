const triplength = document.getElementById("length");
const userAge = document.getElementById("age");
console.log(userAge.value);
console.log(triplength.value);
let pricetrip = triplenght * 0.233;
let scontojunior = pricetrip * 194 / 1000;
let scontosenior = pricetrip * 377 /1000;
let priceticket;
if (userAge<18) {
    priceticket = parseInt(pricetrip-scontojunior);
    consolelog(priceticket);
} else if (userAge>65) {
    priceticket = parseInt(pricetrip-scontosenior);
    console.log(priceticket);
} else {
    priceticket=pricetrip;
    console.log(priceticket);
}