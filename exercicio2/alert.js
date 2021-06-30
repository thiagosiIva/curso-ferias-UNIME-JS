const numeros = [12, 3, 8, -2, 18, 5, 6, -1]
const pares = []
const impares = []



   for(let i=1 ; i<=4 ;i++){
        numeros.push(parseInt(prompt("Digite 4 números")))  
        
    } 
 
   for(let j=0 ; j<=numeros.length-1 ; j++){
        
        if (numeros[j]%2 ==0){
            pares.push(numeros[j])
   
        }
        
     }
  
     for(let h=0 ; h<=pares.length-1 ; h++){
         if(pares[h]<0){
            pares[h] = null
         }
     }
   
     for(let j=0 ; j<=numeros.length-1 ; j++){
        
        if (numeros[j]%2 != 0){
            impares.push(numeros[j])
   
        }
        
     }
     for(let m=0 ; m<=impares.length-1 ; m++){
        if(impares[m]<0){
           impares[m] = null
        }
    }

    
    console.log(pares)
    console.log(impares)

  
    
