// progate js 

const user = {
name : 'レオ',
age : 14
};

console.log(user.age);



const user1 = {
name : 'レオ',
age : () => {
    console.log('2歳です')
}
};
user1.age();

const user2 = {
    name: 'れお',
    age: () => {
        console.log('5歳です')
    }
};
user2.age();

class Animal{
constructor(){
    console.log('インスタンスを生成しました。');
}
}
const animal = new Animal();

class Animal1{
    constructor(){
        this.name = 'レオ';
    }
}
const animal1 = new Animal1();
console.log(animal1.name);

class Animal2 {
    constructor() {
        this.name = 'レオ';
        this.age = 12;
    }
}
const animal2 = new Animal2();
console.log(animal2.age);


class Animal3{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`${this.name}と言います。`);
    }
}
const animal3 = new Animal3('レオ', 3);
console.log(animal3.name);
console.log(animal3.age);

animal3.greet();

class Animal4{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('こんにちは');
    }

    info(){
        this.greet();

        console.log(this.name);
        console.log(this.age);
    }
}

const animal4 = new Animal4('あらら', 10);

animal4.info();


class Animal5{
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('こんにちは');
    }

    info(){
        console.log(`私は${this.name}です`);
        console.log(`私は${this.age}才です。`);
        
        this.greet();
    }
}

const animal5 = new Animal5('れお', 19);
animal5.info();
animal5.greet();