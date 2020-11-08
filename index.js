let unko = 'Hello World';
unko = 'Hello World 2 !!';
console.log(unko);

// 定数
const bigUnko = 'He.. Hell';
console.log(bigUnko);

let inoki =['いち', 'ni', 'さん', 'da-'];
console.log(inoki[3]);

let index = 0;
while(index < inoki.length){
    console.log(inoki[index]);
    index++;
}

if(inoki.length > 3){
    console.log('ボンバイエ！');
} else {
    console.log('ボンバ！');
}


const test = (arg) => {

if(inoki.length > arg){
    console.log('ボンバイエ！');
} else {
    console.log('ボンバ！');
}

};

test(6);


const unko2 ={
    color: 'pink',
    size: 'large',
    purgume: 'mint'
}
console.log(window.innerWidth);


let name ='紗千代です';
console.log(name);

let name2 = 'sachiyoです';
console.log(name2);

let length = 5;
console.log(length);
console.log(length * length * 3);

name = 'くにさん';
console.log(name);


let number = 7;
console.log(number);

number += 3;
console.log(number);

number /=2;
console.log(number);

number += 2;
console.log(number);

number %= 3;
console.log(number);

number *= 4;
console.log(number);

number += 6;
console.log(number);

const language = 'フランス語';
const age = 7;
console.log(language);

console.log(language + 'を話します。');

console.log(`${language}を話します。`);
console.log(`${age}歳です。`);

const level = 12;
if (level > 10){
    console.log('レベルが10より大きいです。');
}
const age1 = 24;
if (age >= 20){
    console.log('私は20際以上です。');
}

const password = 'aiueo';
if ( password === 'aiueo'){
    console.log('ログインに成功しました。');
} 

if ( password !== 'aiueo'){
    console.log('パスワードが間違っっています');
}

const age3 = 17;
if (age3 >= 20){
    console.log('私は20際以上です');
} else if (age3 >= 10){
    console.log('私は10才以上、20さい未満です')
} else{
    console.log('私は10才未満です');
}

const age4 = 24;
if ( age4 >= 20 && age < 30){
    console.log('私は20代です');
}

const rank = 5;

switch (rank){
    case 1:
        console.log('金メダルです！');
        break;

    case 2:
    console.log('銀メダルです');
    break;

    case 3:
    console.log('銀メダルです');
    break;

    default:
        console.log('メダルはありません');
        break;
        
}

const greet = function(){
    console.log('Greetings!');
    console.log('関数を学習します');
}
greet();

const hello = () => {
    console.log('Hello!');
}
hello();

const greet1 = (name) =>{
    console.log(`こんにちは、${name}さん`);
}
greet1('ひつじ');

const add = (number1, number2) => {
    console.log(number1 + number2);
}

add(5, 7);

const half =() => {
    return number/2 ;
}

const result = half(130);

console.log(`130の半分は${result}です`);

const add2 = (a, b) => {
    return a + b + b;
}

const sum1 = add2(5, 4);
console.log(sum1);

const check = (number) => {
    return number %= 3 === 0;
}

if (check(123)){
    console.log('３の倍数です');
} else {
    console.log('３の倍数ではありません。');
}

const check2 =(number) => {
    return number %= 4 === 0;
}
if (check2(545)){
    console.log('4の倍数です');
} else {
    console.log('４の倍数ではありません');
}

const number5 = 103;
const number6 = 72;
const number7 = 189;

const getMax = (a,b,c) => {
let max = 1;

if ( b > max){
    max = b;
} 
if (c > max){
    max = c;
}
return max;
}

const max = getMax(number5, number6, number7);
console.log(`最大値は${max}です`);