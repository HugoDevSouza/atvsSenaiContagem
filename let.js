

/* var numeroAlunos = 0;
for (; numeroAlunos < 9; numeroAlunos++) {
    console.log(numeroAlunos);                         
} */



let ListaAlunos = ["HUGO", "ALEXANDRA", "CECILIA", "MARIZA", "GABRIEL", "MAICON"]

let contador = 0;

while (contador < ListaAlunos.length){ 

  if (contador == 0){ 
               console.log(contador + " - ZERO - "  + ListaAlunos[contador])    // concatenação
        }else if (contador % 2 != 0 ){
               console.log (`${contador} - IMPAR - ${ListaAlunos[contador]}`) // INTERPOLAÇÃO - TEMPLATE STRINGS
       }else  {
        console.log (`${contador} - PAR -  ${ListaAlunos[contador]}`)
      }
  contador++ 

}
  

// for (let contador = 0 ; contador < ListaAlunos.length; contador++){
//   // console.log(contador)
//     if(contador == 0) {
//           console.log(contador + " - ZERO")  // concatenação
//    }else if (contador % 2 == 1 ){
//           console.log (`${contador} - IMPAR `) // INTERPOLAÇÃO - TEMPLATE STRINGS
//    }else  {
//     console.log (`${contador} - PAR `)
// }
// }
// console.log(ListaAlunos) // mostrar lista de alunos
// console.log(ListaAlunos.length) // mostar quantidade de alunos
// console.log(ListaAlunos[0]) // mostar indice do aluno (indice: 0 = 1° lugar)




  