/*
  if(비교식이 참이면){
    ~~~~~
  }else if(비교식이 참이면){
    ~~~~~
  }else {
    거짓이면 ~~~
  }

  {} 생략하지 않는 컨벤션을 추천

  문자열은 참 비어있는 문자열'' 거짓
  null , undefined 거짓
  모든 객체는 참
*/

let age = 10;

if(age === 10 || age > 20){
  console.log('나이는 10살')
}else {
  console.log('모르겠습니다.')
}




/*
  switch 문
  코드의 중단점을 break로 설정을 해줘야한다.
*/

age = 1
if(age ===1){
  console.log(1)
}else if (age === 2){
  console.log(2)
}else if (age === 3){
  console.log(3)
}else{
  console.log('??')
}

switch (age) {
  case 1:
    console.log(1)
    break;
  case 2:
    console.log(2)
    break;
  case 3:
    console.log(3)
    break;
  default:
    console.log('??')
    break;
}

