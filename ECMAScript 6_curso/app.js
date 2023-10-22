
//Var no guarda variables ni valores
/*var item = 'prueba';
var item = 'prueba2';

console.log(item);

var bool = true;

if(true){
    var bool = false;
}else{
    var bool = 'acaba';
}

console.log(bool);*/

//Const si que guarda y no deja poner la misma variable
/*const item = 'prueba';
//const item = 'prueba2';

console.log(item);

if(true){
    const bool = false;
}else{
    const bool = 'acaba';
}


//Se puede añadir en const si es array
const array =['uno','dos'];
array.push['dos'];

for(let index = 0; index<array.length; index++){
    console.log(array[index]);
}

for (const key of array) {
    console.log(key);
}


const numeros = {
    cantidad: '1',
};
numeros.cantidad = '2';
console.log(numeros);

let chain = 'palabra';
let number = 1;

function myFunc(strings, word, num){
    const str1 = strings[0];
    const str2 = strings[1];

    let strNum;

    if(num === 1){
        strNum = 'uno';
    }else{
        strNum = 'otro';
    }

    return `${str1}${word}${str2}${strNum}`;
}

const message = myFunc`Aqui vamos a añadir una ${chain} y un numero ${number}`;
console.log(message);


const add = function(a,b){
    if(b===undefined){
        b=1;
    }
    return a+b;
};

const add2 = (a,b = 1) => a+b;

const result = add(1);
const result2 = add2(1,3);
console.log(result);
console.log(result2);

const persona ={
    name : 'ejemplo',
    hola : function(){
        console.log(`Hola soy ${this.name}`);
    }
};

persona.hola();

function logThis() { 
    console.log(this);
 }

const persona2 ={
    name : 'ejemplo',
    hola :`Hola soy ${this.name}`,
    
};

const bindedLog = logThis.bind(persona2);
bindedLog();


function Person(gender){
    this.gender = gender;
}

Person.prototype.test = function() {
    console.log('Prueba');
}

const person = new Person('male');

console.log(person.gender);
console.log(person.test());

class Person2{
    constructor(gender){
        this.gender = gender;
    }
    test(){
        console.log('Prueba');
    }
    
}


const person2 = new Person2('male');

console.log(person2.gender);
console.log(person2.test());

class Parent {
    test(){
        console.log('Parent');
    }
}

class Child extends Parent{
    testSame(){
        console.log('Child');
    }
}

const child = new Child();
console.log(child.test());
console.log(child.testSame());

function concatenate(...arr){
    return arr.reduce((previousValue, currentValue) => {
        return previousValue+currentValue;
    },0);
}

console.log(concatenate(1,2));
console.log(concatenate(1,2,3));
console.log(concatenate(1,2,3,4));


const testPromise = new Promise((resolve, reject) => {
    reject(new Error('No funciona'));
});

testPromise
.then(function okay(test){
    console.log(test);
})
.catch(function error(err){
    console.log(err);
})

const personEx = (name) => {
    name: name;
  };
console.log(personEx('Bob'));
*/

console.log(`fds`);