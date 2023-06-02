/*
    함수란?
    어떤 목적의 계산을 하는 코드의 묶음. 필요할때마다 그 계산을 호출하여 수행하는 코드

    return 값을 돌려주다.
*/



// 함수정의(문)
function myFn(x){
    return x + 100;
}
const result = myFn(10); // result = 110




// 익명함수(식) - 반드시 변수에 넣어야함. 함수를 값으로 취급 가능(대입문)
const myFnV2 = function(){
    return 100;
};
myFnV2();




// 즉시실행함수 - 단 한번만 실행이 가능한 함수.
(function(){
    console.log('즉시 실행 함수 실행!')
})();




// 가변인자 - ... => 인자가 몇개가 올지 모른다.
// a = 10 , b = 20 ,  args = [30, 40, 50]
function sum(a, b, ...args){
    let  s = 0;
    for(let i = 0; i < args.length; i++){
        s = s + args[i]
    }
    return s
}

const abcSum = sum(10, 20, 30, 40, 50)

sum.call(null, 10, 20, 30);

let ary = [10, 20, 30]
sum.apply(null, ary);
// sum.apply(null, [10, 20, 30]);

console.log(abcSum)




// 화살표 함수 - 익명함수가 기본값
let sumV2 = (a, b, ...args) => {
    let  s = 0;
    for(let i = 0; i < args.length; i++){
        s = s + args[i]
    }
    return s
}



// 화살표함수의 변형 - 인자가 1개일 경우 ()괄호 생략가능. 코드가 1줄이라면 return 생략 가능.
const ten = x => 100 + x;

// const ten = (x) => {
//     return 100 + x
// };



// 생성기함수(*) - yield
function* gen(){
    yield 10;
    yield 20;
    return 30;
}

const g = gen()

g.next();
g.next();
g.next();



// 비동기 함수 - async
async function myTask(){

}