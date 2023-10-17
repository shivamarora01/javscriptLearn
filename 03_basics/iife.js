// (function chai(){
//     console.log("Hi");
// })();
// (function chamola(){
//     console.log("Shivam")
// })()


((action)=>{
    console.log(`i ${action}`)
})("play");
(()=>{
    console.log("football")
})()


//parameter passing


let var1 = 10
let var2 = 5
function myadd(num1,num2){
    let total = num1+num2
    return total;
}
let result1 = myadd(var1,var2);
let result2 = myadd(9,4); 