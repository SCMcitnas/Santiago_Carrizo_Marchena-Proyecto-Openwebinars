var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var _a, _b;
console.log('Hello world');
var Bool;
Bool = true;
var num;
num = 2;
//Funciona tanto '' como "" como ``
var str1;
str1 = 'Hello';
str1 = "Hello again";
str1 = "Hello last time";
var activities = [1, 'hello', true];
activities.push('world');
activities.push(2);
activities.push(false);
var activities2 = ['One', 'Two'];
//activities2.push(2);
var arrayNum = [1, 2];
//arrayNum.push('a');
var ex;
ex = 'Example';
ex = 1;
var arrayAny = [1, 'hello', true];
//Tuple
var arrayTuple = [1, 2];
var personaT = {
    name: 'nombre',
    age: 20,
};
var personaI = {
    name: 'nombre',
    age: 21,
    sayHello: function () { },
};
//Record
var objectRecord = {};
objectRecord.name = 'Name';
objectRecord['age'] = 21;
var personUnVar = {
    name: 'Name',
    age: 23,
};
var personOrVar = {
    name: 'Name',
};
//Funciones basicas
var combinaVal;
function add(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
function sayHello() {
    console.log('Ok');
}
var userFunc = 'X';
if (userFunc === 'Y') {
    combinaVal = add;
}
else {
    combinaVal = sayHello;
}
combinaVal(1, 2);
//never
function funcNever(message) {
    if (message === 'hola') {
        return true;
    }
    throw new Error(message);
}
var resultNever = funcNever('Ha ocurrido un error');
console.log(resultNever);
//Clase
var personaClase = /** @class */ (function () {
    function personaClase(gender) {
        this.gender = gender;
    }
    personaClase.prototype.sayHello = function () {
        console.log('hello');
    };
    return personaClase;
}());
var personClass = new personaClase('H');
//Herencia
var personaHerencia = /** @class */ (function () {
    function personaHerencia(gender) {
        this.gender = gender;
    }
    return personaHerencia;
}());
var developerHerencia = /** @class */ (function (_super) {
    __extends(developerHerencia, _super);
    function developerHerencia(gender, age) {
        var _this = _super.call(this, gender) || this;
        _this.age = age;
        _this.gender = gender;
        return _this;
    }
    return developerHerencia;
}(personaHerencia));
//Chaining
var ejemploChain = {};
if (((_b = (_a = ejemploChain === null || ejemploChain === void 0 ? void 0 : ejemploChain.var1) === null || _a === void 0 ? void 0 : _a.var2) === null || _b === void 0 ? void 0 : _b.var3) === 'valor') {
    do
        ();
    while //Nullable
     ();
}
//Nullable
function fNull(stringOrNull) {
    return stringOrNull !== null && stringOrNull !== void 0 ? stringOrNull : 'default';
}
var f = fNull(null);
//Generic
function identityGen(arg, arg2) {
    return arg;
}
var generic = identityGen(12);
var generic2 = identityGen(true, 'ejem');
var objectCast = {
    name: 'Jhon',
};
var item = 'hello';
