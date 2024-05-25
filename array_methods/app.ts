let arr = [1,45, 76, 87, 56]
console.log(arr);
console.log(arr[3]);//access individual element
console.log(arr.length);//length

let numberArray : number[] = [11,23,45,67,96,3]
console.log(numberArray);

let stringArray = ["Murtaza", "Hasnain", "Farhan", "Ali"]
console.log(stringArray);

let newArray = ["Karachi", "Islamabad", "Lahore", "Quetta", "Peshawar", {}]
console.log(newArray);

//unshift (Add Element from the begining)
newArray.unshift("Hyderabad")
console.log(newArray);
//adding an object
newArray.push({name: "Hasnain"})

//shift (delete from the begining)
console.log(newArray.shift());
console.log(newArray);

//push (Add to the End)
console.log(newArray.push("Rawalpindi"));//return length of array
console.log(newArray);

//pop (delete from end)
console.log(newArray.pop());//return remove element
console.log(newArray);

//slice
console.log(newArray.slice(3,4));

//splice
newArray.splice(1,3,"Murtaza")
console.log(newArray);
newArray.splice(1,2)
console.log(newArray);

//If we want the array size fixed so we make it tuple
let Tuples: readonly[string, string, number, boolean, number] 
= ["Murtaza", "Hasnain", 12, false, 29]

console.log(Tuples);
//but there is an issue with push function
// Tuples.push("ahs")//with readonly this line gives error
console.log(Tuples);
//to avoid this we used read only property
