// // //Ejercicio 1
// let Unidad, Cantidad, Mi, Km, Mt;
// Unidad = parseInt(prompt("Digite 1 para Millas - 2 para Km - 3 Metros"));
// Cantidad = parseInt(prompt("Digite el valor a convertir"));
// switch (Unidad){
//     case 1: //CTRL + H para buscar
//         Km = Cantidad * 1.6093;
//         Mt = Cantidad * 1609.34;
//         document.write(Cantidad + " Millas, equivalen a" + Km + "Kilometros;" + Mt + "Metros");
//         break;
//     case 2: 
//         Mi = Cantidad * 0.621371;
//         Mt = Cantidad * 1000;
//         document.write(Cantidad + "Kilometros, equivalen a " + Mi + "Millas, y a " + Mt + "Metros");
//         break;
//     case 3:
//         Mi = Cantidad * 0.000621371;
//         Km = Cantidad / 1000;
//         document.write(Cantidad + "Metros, equivalen a " + Mi + "Millas, y a " + Km + "Kilometros");
//         break;
//     default:
//         document.write("Valor INCORRECTO");
//         break;
// }
// // //Ejercicio 2
// let num, d1, d2, d3, d4, d5, d6, coc;
// num = prompt("Digite un numero de 6 cifras")
// d6 = num % 10;
// coc = Math.trunc(num / 10);
// d5 = coc % 10;
// coc = Math.trunc(coc / 10);
// d4 = coc % 10;
// coc = Math.trunc(coc / 10);
// d3 = coc % 10;
// coc = Math.trunc(coc / 10);
// d2 = coc % 10;
// coc = Math.trunc(coc / 10);
// d1 = coc % 10;
// coc = Math.trunc(coc / 10);
// document.write(d6 +" " + d5 + " "+ d4 + " " + d3 + " " + d2 + " " + d1);

// document.write("La suma de las cifras centrales es: " + (d3+d4));
// document.write("El resultado de la multiplicacion es:" * (d1*+d6));
// document.write("La resta es: " + (d2-d5)); 
// //1 hora = 60 minutos, 1 minuto = 60 segundos, y 1 hora = 3600 segundos.

// //Ejercicio 3
// let second, hour, minute;

// second = parseInt(prompt("Ingrese segundos: "));
// hour = parseInt(prompt("Ingrese horas: "));
// minute = parseInt(prompt("Ingrese minutos: "));
// // ++; sumar 1
// second++;
// //Operaciones === Estrictamente Igual
// if (second === 60) {
//     second = 0;
//     minute++;

//     if (minute === 60) {
//         minute = 0;
//         hour++;

//         if (hour === 24) {
//             hour = 0;
//         }
//     }
// }

// alert("Nueva hora: " + hour + ":" + minute + ":" + second);
// Ejercicio 4
// 2. ECUACIÓN CUADRÁTICA

// let a = parseFloat(prompt("Ingrese valor de a:"));
// let b = parseFloat(prompt("Ingrese valor de b:"));
// let c = parseFloat(prompt("Ingrese valor de c:"));

// // Discriminante
// let discriminante = (b * b) - (4 * a * c);

// document.write("Discriminante: " + discriminante + "<br>");

// // Caso 1: DOS soluciones reales
// if (discriminante > 0) {

//     let x1 = (-b + Math.sqrt(discriminante)) / (2 * a);
//     let x2 = (-b - Math.sqrt(discriminante)) / (2 * a);

//     document.write("Hay DOS soluciones reales <br>");
//     document.write("x1 = " + x1 + "<br>");
//     document.write("x2 = " + x2);
// }

// // Caso 2: UNA solución real
// else if (discriminante === 0) {

//     let x = (-b) / (2 * a);

//     document.write("Hay UNA solución real <br>");
//     document.write("x = " + x);
// }

// // // Caso 3: Soluciones imaginarias
// else {

//     document.write("Hay DOS soluciones imaginarias <br>");

//     let parteReal = (-b / (2 * a));
//     let parteImaginaria =
//         Math.sqrt(-discriminante) / (2 * a);

//     document.write(
//         "x1 = " +
//         parteReal + " + " +
//         parteImaginaria + "i <br>"
//     );

//     document.write(
//         "x2 = " +
//         parteReal + " - " +
//         parteImaginaria + "i"
//     );
// }

// //SOLUCION EJERCICIO 3
// let caso1, caso2, caso3, caso4;
// caso1 = '13:19:25';
// caso2 = '13:19:59';
// caso3 = '13:59:59';
// caso4 = '23:59:59';

 
//  let hora, min, seg;
//  const tiempo = caso1.split(":");
//  console.log(tiempo); ['23','59','59']
//  hora =(tiempo[0]); 
//  min =(tiempo[1]); 
//  seg =(tiempo[2]); 

//  if (hora==23 && min ==59 && seg==59){
//     hora=0; min=0; seg=0;
//  } else if (min==59 && seg==59){
//     hora++; min=0; seg=0;
//  } else if (seg==59){
//      min++; seg=0;
// }else {
//     seg++
// }

// console.log(hora + ':'+ min + ':' +seg)
/*
let a,b,c,x1,x2,disc;
a=parseFloat(prompt('valor de a: '));
b=parseFloat(prompt('valor de b: '));
c=parseFloat(prompt('valor de c: '));
disc= b*b-(4*a*c);
if (disc == 0){
    document.write('Solo hay una solucion');
    x1 = (-b+ Math.sqrt(disc))/2*a;
    document.write('<br>');
    document.write('solucion: ' + x1);
}else if (disc>0){
    x1 = (-b + Math.sqrt(disc))/2*a;
    x1 = (-b - Math.sqrt(disc))/2*a;
    document.write('pSolucion 1:'+ x1);
    document.write('pSolucion 2: '+ x2);

}else{
    document.write('La solucion incluye numeros imaginarios');
}
*/

//ejercicios temperatura y sistema de radares//

// ejercicio2.js

const prompt = requiere('prompt-sync')();
let temp, menores, iguales, mayores;

menores = 0;
iguales = 0;
mayores = 0;

temp = parseInt(prompt("Ingrese la temperatura: "));

while (temp != 99 && temp != -99) {

    if (temp < 0) {
        menores++;

    } else if (temp == 0) {
        iguales++;

    } else {
        mayores++;
    }

    temp = parseInt(prompt("Ingrese la temperatura: "));
}

document.write("Temperaturas menores que 0: " + menores + "<br>");
document.write("Temperaturas iguales a 0: " + iguales + "<br>");
document.write("Temperaturas mayores que 0: " + mayores);

