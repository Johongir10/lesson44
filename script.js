
let numbers=[23,89,62,99,2,9,33,59,3,7,48,26]
let Juft=[];



for(let i=0; i<numbers.length; i++){
    if(numbers[i]%2==0){
        Juft.push(numbers[i])
    }
    
}
console.log("Boshlanishdagi array :  " ,  numbers);
console.log("JUft sondagi array :  "  ,Juft);