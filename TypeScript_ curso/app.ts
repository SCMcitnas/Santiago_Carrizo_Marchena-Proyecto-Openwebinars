console.log('Hello world');

var Bool: boolean;

Bool = true;

var num: number;

num = 2;

//Funciona tanto '' como "" como ``

var str1: string;
str1 = 'Hello';
str1 = "Hello again";
str1 = `Hello last time`;

var activities = [1,'hello',true];

activities.push('world');
activities.push(2);
activities.push(false);

var activities2 = ['One','Two'];
//activities2.push(2);

var arrayNum: number[] = [1,2];
//arrayNum.push('a');

var ex: any;
ex = 'Example';
ex = 1;

var arrayAny: any[] = [1,'hello',true];

//Tuple
var arrayTuple: [number, number] = [1,2];

//Type
type personaType ={
    name: string;
    age?: number;
}

const personaT: personaType ={
    name:'nombre',
    age:20,
};

//Interface
interface personaInterface {
    name: string;
    age?: number;
    sayHello(): void;
}

const personaI: personaInterface={
    name:'nombre',
    age: 21,
    sayHello: function() {},
}

//Record
const objectRecord: Record<string, any>= {};

objectRecord.name = 'Name';
objectRecord['age'] = 21;

//Union
type personNameUn = {
    name: string;
};

type personAgeUn = {
    age: number;
} ;

type personUn = personNameUn & personAgeUn;

const personUnVar: personUn = {
    name: 'Name',
    age: 23,
}

//Or
type personNameOr = {
    name: string;
};

type personAgeOr = {
    age: number;
} ;

type personOr = personNameOr | personAgeOr;

const personOrVar: personOr = {
    name: 'Name',
}

//Funciones basicas
let combinaVal: Function;

function add(a: number,b: number = 1): number{
    return a+b;
}

function sayHello(){
    console.log('Ok');
}

let userFunc = 'X';

if(userFunc === 'Y'){
    combinaVal=add;
}else{
    combinaVal=sayHello;
}

combinaVal(1,2);

//never
function funcNever (message: string): never | boolean{
    if(message === 'hola'){
        return true;
    }
    throw new Error(message);
}
const resultNever = funcNever('Ha ocurrido un error');
console.log(resultNever);

//Clase
class personaClase{
    public gender: string;
    constructor(gender: string){
        this.gender=gender;
    }

    public sayHello(){
        console.log('hello');
    }
}

const personClass = new personaClase('H');

//Herencia
class personaHerencia{
    public gender: string;
    constructor(gender: string){
        this.gender=gender;
    }
}

class developerHerencia extends personaHerencia{
    age: number;
    
    constructor(gender:string, age: number){
        super(gender);
        this.age= age;
        this.gender = gender;

    }
}

//Chaining
const ejemploChain= {};

if(ejemploChain?.var1?.var2?.var3 === 'valor'){
    do();
}

//Nullable
function fNull(stringOrNull: string | null): string{

    return stringOrNull ?? 'default';
} 
var f = fNull(null);

//Generic
function identityGen<T, Z>(arg: T, arg2?: Z): T{
    return arg;
}

const generic = identityGen<number, boolean>(12);
const generic2 = identityGen<boolean, string>(true,'ejem');

//Casting
type personCast={
    name: string
};

const objectCast = {
    name: 'Jhon',
}as personCast;

const item = ('hello' as unknown) as number;

