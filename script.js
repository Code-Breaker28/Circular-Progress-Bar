let number = document.getElementById("number");
let number1 = document.getElementById("number-1");
let number2 = document.getElementById("number-2");
let number3 = document.getElementById("number-3");
let number4 = document.getElementById("number-4");
let counter = 0;
let counter1 = 0;
let counter2 = 0;
let counter3 = 0;
let counter4 = 0;

setInterval(() => {
    if(counter == 80){
        clearInterval();
    }
    else{
        counter += 1;
    number.innerHTML = counter + "%";
    }
    
}, 16);

setInterval(() => {
    if(counter1 == 70){
        clearInterval();
    }
    else{
        counter1 += 1;
        number1.innerHTML = counter1 + "%";
    }
}, 16);

setInterval(() => {
    if(counter2 == 60){
        clearInterval();
    }
    else{
        counter2 += 1;
        number2.innerHTML = counter2 + "%";
    }
}, 18);

setInterval(() => {
    if(counter3 == 60){
        clearInterval();
    }
    else{
        counter3 += 1;
        number3.innerHTML = counter3 + "%";
    }
}, 18);

setInterval(() => {
    if(counter4 == 50){
        clearInterval();
    }
    else{
        counter4 += 1;
        number4.innerHTML = counter4 + "%";
    }
}, 30)