var str="Chhavi";
function stringRev(str){
var newString="";
   // var newStr = "";
    for(let i = str.length-1 ; i>=0 ; i--){
        newString += str[i];
    }
    return newString;
}


//let newString="chavi";
const finalStr = stringRev(str);
console.log(finalStr);
