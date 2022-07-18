const num = Math.floor(Math.random() * 10 );
console.log(`Random value between 1 and 10000 is ${num}`);
// let num=9;

   var isPrime=true;
    for(var i = 2; i <= Math.floor(num/2); i++){
      if(num % i == 0) {
        isPrime=false;
        break;
      }
     
    }

    // console.log(9/2);

    if(isPrime)  console.log('Prime',num);
    else  console.log('Non Prime',num);