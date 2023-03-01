const heroCharacter = {
    name: "Rinier",
    status: "Marksman",
    damage: 500,
    isStrong: true,
}


function heroChar(){
    console.log(heroCharacter)
}

heroChar()

console.log(heroCharacter);
console.log(heroCharacter.name);
heroCharacter.damage = 1000
console.log(heroCharacter);
heroCharacter.speed = 10;
console.log(heroCharacter);

// Function
function myFriends(nameOfFriends, age){
    console.log("My Friends name is " + nameOfFriends + " he's/she's age are " + age );
}

myFriends("Rinier", 21)
myFriends("Jimuel", 22)
myFriends("Lezeth", 22)
myFriends("Regie") 


function simpleCalculator(num1, num2){
    console.log(num1 + num2)
}

simpleCalculator(1 , 4 )


// Function Array Log / Array Push

const player = {
    name: "Rinier Pogi",
    sayHello: function(otherPersonName){
        console.log("Hi " + otherPersonName + " nice to meet you")
    },
};

console.log(player.name)
player.sayHello("Rinier");
player.sayHello("Jimuel");