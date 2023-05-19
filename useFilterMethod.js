// let arr = [371, 373, 375, 377, 379, 381, 383, 385, 387, 389];

// let res = arr.filter(x => x < 380); // it return the numbers which smaller than 380
// console.log(res); // 

// let users = [
//     { "firstName": 'John', "lastName": 'Sharma', "age": 20 },
//     { "firstName": 'Mary', "lastName": 'Kumar', "age": 21 },
//     { "firstName": 'Mike', "lastName": 'Jain', "age": 22 }
// ]

// let res1 = users.filter(t => t.age>20).map(t => t.firstName+" "+t.lastName);
// console.log(res1);

let arr = [7,8,9,10,12]

var firstMissingPositive = function(nums) {
    let count = 1;
    let sortArr = nums.sort((a,b)=>a-b)
    let sortedArr = sortArr.filter(x => x>0)
    let len = sortedArr.length
    console.log(sortedArr)
    for(let i=0; i<len; i++){
        if(sortedArr[0] == 0){
            sortedArr.shift()
        }
        else if(sortedArr[0] < 0){

        }
        else if(sortedArr[i] == count){
            if(count == len)
            return len+1
        }
       else{
        return count
        break;
       }
      count++
    }
    };
    console.log(firstMissingPositive(arr))