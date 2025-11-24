// problem 2 

// function flick(arr){
//   let always=true
//   let str=[]
//   for(let item of arr){
//     if (item==='flick'){
//       always =!always}
   
//    str.push(always)
//   }
//   return str
// }
// console.log(flick(['codewars', 'flick', 'code', 'wars']))
// console.log(flick(['flick', 'chocolate', 'adventure', 'sunshine']))
// console.log(flick(['bicycle', 'jarmony', 'flick', 'sheep', 'flick']))


//problem 3
// for(let i=1; i<=12 ; i++) 
//   {
//   if (i===1|| i===2 || i===3 )
//     console.log(i+' is part of the first quarter')
//   else if (i===4|| i===5||i===6)
//     console.log(i+' is part of the second quarter')
//     else if (i===7|| i===8||i===9)
//     console.log(i+' is part of the third quarter')
//     else if (i===10|| i===11||i===12)
//     console.log(i+' is part of the fourth quarter')
// }

//  problem 4
// let arr=['sheep', 'sheep', 'wolf']
// // let arr1=['sheep', 'sheep', 'sheep', 'wolf', 'sheep'] test 2 
// let rev = arr.reverse();

// let pw = rev.indexOf('wolf')

//  if (pw===0)
//  {
//   console.log('Pls go away and stop eating my sheep')
//  }
//  else
//  {
//   console.log(`Oi! Sheep number ${pw}You are about to be eaten by a wolf!`)
//  }

// problem 5 

// function tPoint(game){
//     let tot = 0;
//     for (let i = 0; i < game.length; i++) {
//         let mat = game[i];
//         let f = mat[0];  //first score
//         let s = mat[2];  //second score
//         if (f > s) tot += 3;
//         else if (f === s) tot += 1;
//     }   
//     return tot;
// }


// problem 6

// function sumOfDifferences(arr) {
//     if (arr.length <= 1) 
//      return 0;
//         let sort = arr.sort((a, b) => b - a);

//     let sum = 0;
//     for (let i = 0; i < sort.length - 1; i++) {
//         sum += sort[i] - sort[i + 1];
//     }
//     return sum;
// }   

//problem 7

// function fGrade(exam, project) {
// return exam > 90 || project > 10 ? 100 :
//   exam > 75 && project >= 5 ? 90 :
//   exam > 50  && project >= 2 ?  75 : 0 
// }
