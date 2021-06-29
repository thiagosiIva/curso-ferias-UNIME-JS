
let A = prompt("Digite o valor A")
let B = prompt("Digite o valor B")
let C = prompt("Digite o valor C ")

A = parseFloat(A)
B = parseFloat(B)
C = parseFloat(C)

if(A && B && C != 0){
    var delta = Math.pow(B,2)-(4*A*C)

    if(delta>0){

    let x1 = -(B+Math.sqrt(delta))/2*A
    let x2 = -(B-Math.sqrt(delta))/2*A
        let frase = `A equação possui duas soluções reais ${x1} e ${x2}`
        console.log(frase)
    }
   
  

} else {

    if ( A || B || C == 0){

        console.log("Equação incompleta")
    }
}