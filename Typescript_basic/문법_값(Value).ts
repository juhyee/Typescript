/*
   불리언(Boolean)
   숫자(Number)
   문자열(String)
   배열(Array)
   튜플(Tuple) - 특수한 배열
   열거(Enum) - 타입스크립트에서만 존재
   Any - 타입스크립트에서만 존재 모든 데이터 타입 (사용 지양)
   Void - return 값이 없을때 사용
   Null and Undefined
   Never - 절대 발생할 수 없는 타입 절대 반환하지 않은 반환 타입
   객체(Object)
   타입단언(Type assertions)

   값(무엇이든) 변수에 넣을 수 있다.
*/


// 튜플(Tuple) - 특수한 배열
let x: [string, number]
x = ['hello', 10] //성공
// x = [10, 'hello'] //실패



// 열거(Enum) - 타입스크립트에서만 존재(선호하지 않음)
const ColorJs = {
  Red: 1,
  Blue: 2,
  Green: 3
}
ColorJs.Red;


enum ColorTs {
  Red, Blue, Green
}
ColorTs.Red;

