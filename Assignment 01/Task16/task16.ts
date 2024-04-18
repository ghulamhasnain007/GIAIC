const invited_persons = ['Hasnain', 'Haseeb', 'Kamal']

for(var i = 0;i< invited_persons.length; i++){
    console.log(`${invited_persons[i]}, You are invited in my dinner party`)
}

console.log(`${invited_persons[1]} is not coming in dinner`);

invited_persons[1] = "David";

for(var i = 0;i< invited_persons.length; i++){
    console.log(`${invited_persons[i]}, You are invited in my dinner party`)
}

console.log("I found a bigger Dining Table");

invited_persons.unshift("Emily")

invited_persons.splice(2,0, "Alex");

invited_persons.push("James");
for(var i = 0;i< invited_persons.length; i++){
    console.log(`${invited_persons[i]}, You are invited in my dinner party`)
};



