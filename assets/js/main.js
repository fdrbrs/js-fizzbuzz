//Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

//stampo in console

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
    } 
    else if (i % 5 == 0) {
        console.log("Buzz");
    }
    else if (i % 3 == 0){
        console.log("Fizz");
    }
    else {
        console.log(i);
    }
}

//stampo a schermo

var array = [];


for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        array.push("<strong style='color: blue;'>FizzBuzz</strong>");
    } 
    else if (i % 5 == 0) {
        array.push("<strong style='color: red;'>Buzz</strong>");
    }
    else if (i % 3 == 0){
        array.push("<strong style='color: green;'>Fizz</strong>");
    }
    else {
        array.push(i);
    }
}

document.getElementById("array").innerHTML = array;
