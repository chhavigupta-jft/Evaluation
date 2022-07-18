function palindrome(num){
    let revNum=0;
    while(num>0){
      let rem=num%10;
      revNum=revNum*10+rem;
      num=Math.floor(num/10);
    }
    return revNum;
}

var num=1992;
while(!(num==palindrome(num))){ 
    num++
}
console.log(num);