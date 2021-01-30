


var Arraynumeros = ['A',2,3,4,5,6,7,8,9,10,"J",'Q','k'];
//                    corazon   espada     trebol   diamante
var Arraysimbolos = ["&#x2665",'\u2660','&#x2663','&#x2666'];

var numeros = Math.floor(Math.random()*(12));
var simbolos = Math.floor(Math.random()*(4));

//console.log(Arraynumeros= [numeros]);

//let sign = window.prompt("cuadro");
  //falta poner colores 
  
if(Arraysimbolos[simbolos]==Arraysimbolos[0] || Arraysimbolos[simbolos]==Arraysimbolos[3]){
    let div1 = document.querySelector('div1'); 
    let div3 = document.querySelector('div3'); 
    div1.style.color = 'red';
    div3.style.color = 'red';
} 

document.querySelector("div1").innerHTML = Arraysimbolos[simbolos]
document.querySelector("div2").innerHTML = Arraynumeros[numeros]
document.querySelector("div3").innerHTML = Arraysimbolos[simbolos]

  
//var img = new Image();
//img.src = "fas fa-fighter-jet";
//<i class="fas fa-fighter-jet"></i>


