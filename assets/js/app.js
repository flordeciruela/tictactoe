
//obteniendo elementos del document:
var options = document.getElementsByClassName("tic");
var b1 = document.getElementById('1');
var b2 = document.getElementById('2');
var b3 = document.getElementById('3');
var b4 = document.getElementById('4');
var b5 = document.getElementById('5');
var b6 = document.getElementById('6');
var b7 = document.getElementById('7');
var b8 = document.getElementById('8');
var b9 = document.getElementById('9');
var game = false; //estado inicial del juego


function play() { //Funcion para la ejecucion de los turnos
      if (game === false) {
          this.setAttribute("value", "X"); //el valor será X
          validate();
          game = true; //pasa al siguiente jugador
          return true;
      }

      if (game === true) {
          this.setAttribute("value", "O"); //valor será O
          validate();
          game = false;
      } //pasa al siguiente jugador
}

  for (var i in options) {//Ejecuta la funcion play para cada boton pulsado:
       options[i].addEventListener("click", play);
  }

function validate(){ //Funcion que valida si hay un ganador o empate:

                   if((b1.value == "X" && b2.value == "X" && b3.value == "X") ||
                      (b4.value == "X" && b5.value == "X" && b6.value == "X") ||
                      (b7.value == "X" && b8.value == "X" && b9.value == "X") ||
                      (b1.value == "X" && b4.value == "X" && b7.value == "X") ||
                      (b2.value == "X" && b5.value == "X" && b8.value == "X") ||
                      (b3.value == "X" && b6.value == "X" && b9.value == "X") ||
                      (b1.value == "X" && b5.value == "X" && b9.value == "X") ||
                      (b3.value == "X" && b5.value == "X" && b7.value == "X")) {
                      alert("Jugador X ganó!!");
                    } //si hay 3 X seguidas gana X

             else if ((b1.value == "O" && b2.value == "O" && b3.value == "O") ||
                      (b4.value == "O" && b5.value == "O" && b6.value == "O") ||
                      (b7.value == "O" && b8.value == "O" && b9.value == "O") ||
                      (b1.value == "O" && b4.value == "O" && b7.value == "O") ||
                      (b2.value == "O" && b5.value == "O" && b8.value == "O") ||
                      (b3.value == "O" && b6.value == "O" && b9.value == "O") ||
                      (b1.value == "O" && b5.value == "O" && b9.value == "O") ||
                      (b3.value == "O" && b5.value == "O" && b7.value == "O")) {
                      alert("Jugador O ganó!!");
                    } //si hay 3 O seguidas gana O

             else if ((b1.value == "X" || b1.value == "O") &&
                      (b2.value == "X" || b2.value == "O") &&
                      (b3.value == "X" || b3.value == "O") &&
                      (b4.value == "X" || b4.value == "O") &&
                      (b5.value == "X" || b5.value == "O") &&
                      (b6.value == "X" || b6.value == "O") &&
                      (b7.value == "X" || b7.value == "O") &&
                      (b8.value == "X" || b8.value == "O") &&
                      (b9.value == "X" || b9.value == "O")) {
                      alert("Es un empate!!");
                    } //Si no hay casillas disponibles es empate.

  }

if(typeof exports !== 'undefined') {
  exports.validate = validate;
}
