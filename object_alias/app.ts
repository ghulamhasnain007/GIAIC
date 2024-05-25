//object

let students = {
    name: "Hasnain",
    age:20,
    inst: "SMIU"
}
console.log(`Dot Notation: ${students.name}`);//dot notation

console.log(`Square Bracket Notation: ${students["age"]}`);//square bracket notation

//manual typing
let manualData : {name : string, age: number, roll: number | string}=
{
    name: "Bilal",
    age: 12,
    roll: "twelve"
}
console.log(manualData);

//type alias
type primeType = {
    name: string,
    city: string,
    postal: number
}

let info : primeType = {
    name: "Murtaza",
    city: "Karachi",
    postal: 234
}
console.log(info);

//type intersection 
type secondType = {
    name: string,
    lastName: string,
    height: number,
    weight: number | "overweight"
}
type combineType = primeType & secondType

let checkData : combineType = {
    name: "Gulam",
    lastName: "Hasnain",
    height: 5.8,
    weight: "overweight",
    city: "Lahore",
    postal: 1209
}

console.log(checkData);
