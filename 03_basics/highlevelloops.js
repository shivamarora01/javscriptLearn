// // //for of

// // //in  array
// // const arr1 = ["hi" , "my" ,"name" ,"is" , "shivam"]
// // for (const element of arr1) {
// //     console.log(element);
// // }

// // //in string
// // const str1 = "shivam";
// // for (const word of str1) {
// //     console.log(word);
// // }

// // //in object nahi chlega 

// // const obj1 = {
// //     name: "shivam",
// //     class:"ce72"
// // }
// // for (const element of obj1) {
// //     console.log(element);
// // }
// // for (const iterator of object) {
    
// // }



// // const map = new Map();
// // map.set('IN' , 'india')
// // map.set('USA' ,'united states america')
// // map.set('UAE' , 'united arab emirates')
// // // console.log(map);

// // for (const [key,value] of map) {
// //     console.log(key,"=",value);
// // }

// // for (const [key,  value] of map) {
// //     console.log([key,value])
// // }



// //for in loop

// const obj1 = {
//     name: "shivam",
//     class:"ce72"
// }

// for (const key in obj1) {
//     console.log(key , obj1[key]);
// }

// const shivam = "arora";
// for (const key in shivam) {
//     console.log(shivam[key]);
// }

// array[key]


// const arr1 = ["a" ,"b" , "c" , "d"];
// arr1.forEach(function (item){
//     console.log(item);
// })




// const arr2 = [
//     {
//         name:"jatin",
//         salary:"12 lakh"
//     },{
//         name:"shreya",
//         salary:"13 lakh"
//     },{
//         name:"jayant",
//         salary:"14 lakh"
//     },{
//         name:"shivam",
//         salary:"17 lakh"
//     }
// ]
// arr2.forEach((item)=>{
//     console.log(item.name);
// })



const map = new Map();
map.set('IN' , 'india')
map.set('USA' ,'united states america')
map.set('UAE' , 'united arab emirates')
// console.log(map);

for (const [key] in map) {
    console.log(key);
}