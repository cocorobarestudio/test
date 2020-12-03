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

class Animal6{
    constructor(name, age){
        this.name = name;
        this.age = age; 
    }

    greet(){
        console.log('こんにちは');
    }

    info(){
        console.log(`私は${this.name}です`);
        console.log(`私の年は${this.age}歳です`);
        this.greet();
    }
}

const animal6 = new Animal6('あら', 5);
animal6.greet();
animal6.info();



class Animal7 {
    constructor(name, age) {
        this.name = name;
        this. age = age;
    }

    greet(){
        console.log('こんにちは');
    };

    info(){
        console.log(`私の名前は${this.name}です`);
        console.log(`年は${this.age}です`);
        this.greet()

    }

}

class Dog extends Animal7{
    getHumanAge(){
        return this.age*7;
    }
}

const animal7 = new Animal7();

const dog = new Dog('ルナ', 7);
dog.info();

const humanAge = dog.getHumanAge();
console.log(`人間年齢で${humanAge}歳です`);

// オブジェクトの復讐

const animal8 ={
    name: 'レオ',
    age: 3,
    greet: ()=>{
        console.log('こんにちは');
    }
}

console.log(animal8);
animal8.greet();

class Animal9{  
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log('こんばんは');
        console.log(`私の名前は${this.name}です。`);
        console.log(`年は${this.age}歳です`);
    }

    info(){
        this.greet();
        console.log('greetを呼び出しました。');
    }

}

const animal9 = new Animal9('レオ', 3);
console.log(`名前:${animal9.name}`);
console.log(`年齢:${animal9.age}`);
animal9.info();

class Dog1 extends Animal9{
    constructor(name, age, breed){
        super(name, age);
        this.breed = breed;


    }

    
    
    info(){

        this.greet();
    
    const humanAge1 = this.getHumanAge();
    console.log(`人間年齢で${humanAge1}歳です。`)
    console.log(`犬種は${this.breed}です。`)
   };

    getHumanAge(){
        return this.age*7;
    }

}
 const dog1 = new Dog1('あら１', 9, 'ラブラドールレトリバー');
 console.log(`名前:${dog1.name}`);

 dog1.greet();
 dog1.info();

