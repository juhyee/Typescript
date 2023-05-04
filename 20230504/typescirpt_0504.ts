// Typescript의 데이터 유형 정의의 중요성

// javascript에서의 데이터
let age = 10;
let x = 10;
// let weighe = 80;

// typescript 데이터의 유형 설명 변수명:~~ <- ~~ = 타입유형 ex)number

type Centimeter = number // 타입을 생성하여 타입유형을 만듦

let weighe:number = 80;
let height:Centimeter =176;


type RainbowColor = 'red' | 'orange' | 'yellow' | 'green' | 'blue' | 'purple'
let color: RainbowColor = 'orange';
//color = 'black' // -> 오류



