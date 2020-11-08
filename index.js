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
