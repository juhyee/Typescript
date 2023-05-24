/*
  구조분해
*/
const colors = ['red', 'yellow', 'black']
const Colors = {
  blue: 'blue',
  green: 'green',
  white: 'white'
}

// const red = colors[0];
// const yellow = colors[1];
// const black = colors[2];

let [red, yellow, black] = colors;
let [, yellow02] = colors;
let {white, green} = Colors;
// 오른쪽 배열의 분해하여 왼쪽 변수에 원소를 대입해준다.




/*
  비교연산자
  == 동등
  === 일치

  &&(논리 AND) ||(논리 OR) !(NOT)

  + 문자열 연산자

  삼항연산자

  typeOf

  연산자 우선순위 () <-괄호 감싸기
*/

let A = 10;
let B = '10';

/*
if(A == B){
  // 참 true
}

if(A === B){
  // 참 false
}

A = (A === B) ? 0 : 1;


함수가 값이 되는 상황
(function foo(){

});
*/


