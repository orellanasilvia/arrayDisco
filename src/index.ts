let arregloCompletar : number[] = new Array (270);
let indice : number;
//let mayorEdad : number;
//let menorEdad: number;
function Azar () : number {
  return Math.floor(Math.random()*40-19)+19;
  }
 
for (indice = 0; indice < 270 ;indice++) {
arregloCompletar[indice] = Azar(270);

 console.log (`El número en la posición ${indice} es: ${arregloCompletar[indice]}`);
 if (arregloCompletar > 18) {
 console.log("la persona es menor de edad");
} else {
 console.log("la persona es mayor de edad");
}

  }
  }
