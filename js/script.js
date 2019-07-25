// var fruit = 'grapes';
/* 
    switch(fruit){
        case "banana":
            alert('I hate bananas');
            break;
        case "apple":
            alert('I love apples');
            break;
        case "orange":
            alert('Oranges are ok');
            break;
        default:
            alert('I love all other fruits');
            break;
    }
 */

// Object literal
/* var person = {
    firstName: 'Chandler',
    lastName: 'Nguyen',
    age: 19,
    children: ['None', 'None2', 'None3'],
    address: {
        street: '58 Calmette St.',
        city: 'Baltimore',
        state: 'Saigon',
    }, 
    fullName: function(){
        return this.firstName +" "+this.lastName;
    }
}

console.log(person.children[0]);

console.log(person.fullName()); */

// Object Constructor

/* var apple = new Object();
apple.color = 'red';
apple.shape ='round';

apple.describe = function(){
    return 'An apple is the color ' +this.color+' and is the shape '+this.shape+'.'
;}

console.log(apple.describe()); */

// Constructor Pattern

/* function Fruit(name, color, shape){
    this.name = name;
    this.color = color;
    this. shape = shape;
    this.describe = function(){
        return 'A'+this.name+' is the color '+this.color+' and is the shape '+this.shape;
    }
}

var apple = new Fruit('apple', 'red', 'round');
var melon = new Fruit('melon', 'green', 'elipse');

console.log(apple.describe()); console.log(melon.describe()); */

// var users = [
//     {
//         name: 'John Doe',
//         age: 30,
//         describe: function(){
//             return this.name + ' ' + this.age;
//         },
//     },
//     {
//         name: 'Mark Smith',
//         age: 44,

//     },
//     {
//         name: 'Shelly Wilt',
//         age: 20,

//     },
//     {
//         name: 'Jane Doe',
//         age: 18,

//     },
//     describe = function(){
        
//     }
// ]

// function Person(name, age){
//     this.name = name;
//     this.age = age;
//     this.describe = function(){
//         return this.name + ' is ' + this.age + ' years old.';
//     }
// }

// var user1 = new Person('John Appleseed', 39);

// console.log(users[0].name);

// console.log(user1.describe())

// document.getElementById("info").innerHTML = users[0].describe();
// console.log(users[0].describe());

var counter = -.5;

function showDate(){
    var time = document.getElementById('time');
    time.innerHTML = Date();
}

function clearDate(){
    var time = document.getElementById('time');
    time.innerHTML = '';
}

function reappear(){
    var reappear = document.getElementById('reappear');
    var input = document.getElementById('userinput');
    reappear.innerHTML = input.value;
   /*  console.log("counter = ", counter);
    counter+=0.5;
    if (counter >= 10) {
        reappear.innerHTML = input.value + "<br>";
        counter = 0;
    }
    */
}

