// campos 

const number1 = document.querySelector("#n1");
const number2 = document.querySelector("#n2");

//botão


const sum = document.querySelector("#sum");
const sub = document.querySelector("#sub");
const mult = document.querySelector("#mult");
const div = document.querySelector("#div");


//resultado


const resultado = document.querySelector("#resultado");


som.addEventListener("click", function(){
 resultado.innerHTML = Number(number1.value) + Number(number2.value);

 
})
sub.addEventListener("click", function(){
    resultado.innerHTML = Number(number1.value) - Number(number2.value);
   
    
   })
   mult.addEventListener("click", function(){
    resultado.innerHTML = Number(number1.value) * Number(number2.value);
   
    
   })
   div.addEventListener("click", function(){
    resultado.innerHTML = Number(number1.value) / Number(number2.value);
   
    
   })