// Javascript
// js 데이터를 변수에 넣을 때그 변수의 타입을 매번 데이터가 들어가는 시점에 자유롭게 변환한다
// 타입을 자유롭게 바꾸는 메커니즘을 가진다.(느슨한 타입관리) 마지막에 타입(ageJs = 객체타입)을 가진다.
function addAgeJs(age) {
  // 방어코드
  // if(typeof age == 'number'){
  //   return age + 1;
  // }else {
  //   throw 'ERROR!!'
  // }

  return age + 1;
}
let ageJs = addAgeJs('30')
console.log(ageJs)

ageJs = 10;
ageJs = false;
ageJs = {}




// Typescript - 타입 안정성
function addAgeTs(age: number): number{
  return age + 1;
}
let ageTs: number = addAgeTs(30)
console.log(ageTs)