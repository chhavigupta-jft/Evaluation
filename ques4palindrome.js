let num=1232; 

//temp = 1221;
function reverse(num){
    let rev=0;
    let rem, temp;
    while(num>0){
        let rem = num % 10;
        rev = rev*10+rem;
        num = Math.floor(num/10);
    }
    return rev;
}

//console.log(num);
let x = reverse(num);
// let b = reverse(num);
console.log(reverse(num));
// console.log(reverse(num))
if(num == x){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}