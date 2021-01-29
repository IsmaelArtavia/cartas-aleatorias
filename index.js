


var Arraynumeros = ['A',2,3,4,5,6,7,8,9,10,"J",'Q','k'];
//                    corazon   espada     trebol   diamante
var Arraysimbolos = ['&#x2665','&#x2660','&#x2663','&#x2666'];

var numeros = Math.floor(Math.random()*(12)+1);
var simbolos = Math.floor(Math.random()*(3)+1);

//console.log(Arraynumeros= [numeros]);

//let sign = window.prompt("cuadro");
  //falta poner colores 
  

document.querySelector("div1").innerHTML = JSON.stringify(Arraysimbolos[simbolos])
document.querySelector("div3").innerHTML = JSON.stringify(Arraysimbolos[simbolos])
document.querySelector("div2").innerHTML = JSON.stringify(Arraynumeros[numeros])


  
//var img = new Image();
//img.src = "fas fa-fighter-jet";
//<i class="fas fa-fighter-jet"></i>
