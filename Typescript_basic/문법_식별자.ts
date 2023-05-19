/*
   식별자 숫자로 시작할 수 없으며, 공백을 포함할 수 없다.
   코드는 데이터로 변환할 수 없지만 데이터는 코드화 할 수 있다.
   cosnt 상수는 대문자로 작성하는 컨벤션이 있다.
   식별자 내에 공백을 포함할 수 없어 camel_case, snake_case 컨벤션
 */

let age = 10;
const AGE = 10;

function setAge(){

}

let o = {
  age: 10,
  [`my name`]: '김',

}
console.log(o[`my name`])


