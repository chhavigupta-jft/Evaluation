var str ="My name is Chhavi";
var xyz = str.split(" ");    //split string into substrings
var ans = [];
function reverseString(str){
  var str1="";
  for (let i=str.length; i>=0; i--){
    str1+=str.charAt(i);     //returns character at specified index  //string.charAt(index)(0)(1)
  }
  return str1;
}
for(let i=0;i<xyz.length;i++){
  ans[i]=reverseString(xyz[i]);
}
console.log(ans);