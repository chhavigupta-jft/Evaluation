function getUnique(arr){
    let uniqueset = new Set(arr);
    let uniquearr = Array.from(uniqueset);
    console.log(uniquearr);
}
const array=[2,3,3,1,4,4,5];
getUnique(array);