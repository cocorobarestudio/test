let unko1 = 'Hello World';
unko1 = 'Hello World 2 !!';
console.log(unko1);



let inoki2 = ['いーち', 'にー', 'さん', 'だー！'];
console.log(inoki2);
console.log(inoki2[1]);
// ループ文

// if (inoki2.length > 5){
//     console.log('ボンバイエ!');
// }
// else{
//     console.log('ボンバイエ！！！')
// }


let index2 = 0;
while(index2 < 5){
    console.log(index2);
    index2++;

}

// 関数 一定の条件下で命令を出したい時。
// 引数(argument) 一部変えたいなーと言う時に便利
const test1 = (arg) => {
    if (inoki2.length > arg){
        console.log('ボンバイエ!');
    }
    else{
        console.log('ボンバ・・！！！')
    }
};



// オブジェクト
const unko4 = {
    color: 'pink',
    size: 'large',
    purfume: 'mint',
    goToilet: () => {
        console.log('Hello World');
    }
};

console.log(unko4.color);
console.log(unko4.size);
console.log(unko4.goToilet());

document.getElementsByTagName('button')[0].addEventListener('click', ()=>{
window.alert('Hello World');

})

const project = {
    name: 'sachiyo v1.0'
}
console.log(project.name);


project.name = 'sachiyo v2.0';
console.log(project.name);


console.log(project.name);


const array1 =[8, 6, 5, 1, 2];
array1.forEach(number8 => console.log(number8));

array1.forEach(number9 => console.log(number9));
array1.forEach((number10) => console.log(number10));

array1.forEach((number11, index) => console.log('index:number11=>', index, number11));


const doubleArray = array1.map(number11 => number11 + number11);
console.log(doubleArray);

const doubleArray2 = array1.map(number12=>{
    return number12 + number12;
});

console.log(doubleArray2);

const care={
    fuel : 60,
};

const {fuel} = care;
console.log(fuel);

const car = {
    fuel: 60
};

const {fuel : myFuel} = car;
console.log('myFuel =>', myFuel);

const car1 ={
    fuel1: 50
};

const {fuel1} = car1;
console.log(fuel1);

const { fuel1:myFuel1} = car1;
console.log(myFuel);

const car2 ={
    fuel3: 70,
    info:{
        model: 'vitz111'
    }
};

const {fuel3, info:{model}} = car2;

console.log(fuel3);
console.log(model);

function greeting1(name = 'everyone'){
    console.log('hello' + name);
}

greeting1('tokyo');
greeting1();


function greet5(name){
    var message = 'Hey there, ' + name;
    console.log(message);
}
greet5('Alex');

function greeting(name){
    let hello = 'hi there, ' + name;
    console.log(hello);
}
greeting('sachiyo');