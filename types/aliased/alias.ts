let teacher : {name : string, exp: number}= {
    name: "Hasnain",
    exp: 12
}

console.log(teacher);

type Student = {
    name: string;
    age?: number
}

let studentName: Student = {
    name: "Bilal"
}

console.log(studentName);

interface Manager{
    name: string;
    subOrdinates?: string
}

let newManager : Manager= {
    name : "Zia"
}