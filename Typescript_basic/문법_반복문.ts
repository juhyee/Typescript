/*
   반복문

   for문
   for(최초 초기값; 비교식(참인동안); 변화식){   }

   while문
   while문(비교값(참인동안);){   }

   dowhile문
   do{

   }while(참이면 do)

   while - 비교 후 실행
   dowhile - 실행 후 비교

   for of문
   for(const item of arr){
   }

   for of - 배열을 순회할때 사용

   for if
   for(idx in arr){
   }
   for in - 배열, 객체의 키의 값을 가져올떄 사용
*/

const arr = ['A', 'B', 'C', 'D']

// for문
for(let i = 0; i < arr.length; i++){
  console.log(arr[i])
}


// while 문
let  i = 0;
while(i < arr.length){
  console.log(arr[i])
  i++
}


i = 0;
do {
  console.log(arr[i])
  i++
}
while(i < arr.length)



// for of문
for(const item of arr){
  console.log(item)
}


// for in문
const obj = {
  color: 'red',
  width: 200,
  height: 300
}

for(const key in obj){
  console.log(key)
}