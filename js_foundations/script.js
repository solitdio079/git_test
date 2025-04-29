function camelize(str){
    const strArray = str.split("-")
    const strArrayExcludesFirstElUpper = strArray.slice(1).map(item => item.replace(/^./, char => char.toUpperCase()))
    return (strArray[0]+strArrayExcludesFirstElUpper.join(""))
    
}

function filterRange(arr, a, b){
    return arr.filter(item => item>=a && item<=b)
}

function filterRangeInPlace(arr,a,b){
    arr.forEach((element,index) => {
        if(!(a<=element && b>=element)){
            arr.splice(index,1)
        }
    });
   
}
function copySorted(arr){
    const copyArr = arr.slice()
    return copyArr.sort()
}

function sortByAge(arr){
    return arr.sort((a,b) => a.age - b.age)
}
function shuffle(arr){
    const arrCopy = arr.slice()
   
    for(let i = 0; i< arr.length;i++){
        const randomIndex = Math.floor(Math.random()*arrCopy.length)
        arr[i] = arrCopy[randomIndex]
        //delete element from copy
        arrCopy.splice(randomIndex,1)
    }
    console.log(arr)
}

function getAverageAge(arr){
    const arrLength = arr.length

    return arr.map(item => item.age).reduce((acc,curr) => acc +=curr)/arrLength

}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));


function unique(arr) {
    /* your code */
    const uniqueArr=[]
    arr.forEach(item => {
        if(!uniqueArr.includes(item)){
            uniqueArr.push(item)
        }
    })
    return uniqueArr
  }
  function groupById(users){
    return users.reduce((acc,curr) => {
        acc[curr.id]=curr;
        return acc
      } , {})
  }
  
  let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  console.log( unique(strings) ); // Hare, Krishna, :-O
  let users = [
    {id: 'john', name: "John Smith", age: 20},
    {id: 'ann', name: "Ann Smith", age: 24},
    {id: 'pete', name: "Pete Peterson", age: 31},
  ];
  
  let usersById = groupById(users);

  console.log(usersById);
  
  /*
  // after the call we should have:
  
  usersById = {
    john: {id: 'john', name: "John Smith", age: 20},
    ann: {id: 'ann', name: "Ann Smith", age: 24},
    pete: {id: 'pete', name: "Pete Peterson", age: 31},
  }
  */