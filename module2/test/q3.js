// input
// [
//  {name:"Rohan" , rainfall:[1,4,7,3,2,6,13,]},
//  {name:"Himanshu", rainfall:[2,3,5,8,12,4,7]}, 
// ]

function rainDance(arr){
    let ans = [];
    for(let i=0; i<arr.length;i++){
        let obj ={};
        obj.name = arr[i].name;
        let sum = 0;
        let rainfallArr = arr[i].rainfall;
        for(let j=0; j<rainfallArr.length; j++){
            sum += rainfallArr[j];
        }
        let avg = sum/rainfallArr.length;
        obj.avg = avg;
        ans.push(obj);
    }
    return ans;
}

console.log(rainDance([
    {name:"Rohan" , rainfall:[1,4,7,3,2,6,13,]},
    {name:"Himanshu", rainfall:[2,3,5,8,12,4,7]}, 
   ]))