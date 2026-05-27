/*let num = 1;
console.log(num);
num += 1;
console.log(num)
num += 1;
console.log(num)
num += 1;
console.log(num)
num += 1;
console.log(num)
num += 1;
console.log(num)
num += 1;
console.log(num)
num += 1;
console.log(num)
num += 1;
console.log(num)
num += 1;
console.log(num)
num += 1;*/
/*let num = 100 ;         //valor inicial
while (num>= 0){     //condicion VERDADERA
    console.log(num);
    num -= 10;          // incremento


}*/

// ``````let num = 2;      // valor inicial
// do {
//     console.log(num);
//     num+= 2;     // Incremento
// } while(num<=30); //condicion final``````

let tipo1, tipo2, tipo3, cant1, cant2, cant3, cantTotal, precioT;
let frec, día;
do{
    cant1 = prompt('Cantidad de huevos Tipo A: ');
}while (cant1 < 0);

do{
    cant2 = prompt('Cantidad de huevos Tipo AA: ');
}while (cant2 < 0);

do{
    cant3 = prompt('Cantidad de huevos Tipo AAA: ');
}while (cant3 < 0);

do{
frec = prompt ('si el cliente es frecuente digitele 1 si no 0');  
}while (frec != 1 && frec !=0 );

do{
 dia = prompt('Digite 1 compro de L-V; 2 si compro el sabado; 3 si compro el domingo');
}while(dia<1 || dia>3)
 dia = prompt('Digite 1 compro de L-V; 2 si compro el Domingo; 3 si compro el domingo');   