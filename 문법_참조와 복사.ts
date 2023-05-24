let a = 10;
let b = a;
// a = 10 , b = 10

b = 20;
// a = 10 , b = 20

let o = {
  isLoading: false,
}
let o2 = o
// o, o2 = isLoading == false


o2.isLoading = true;
// o, o2 = isLoading == true

function foo(o) {
  o.isLoading = true;
}
foo(o);

// 객체는 절대로 복사되지 않고 늘 참조 된다. 💥💥

console.log('done')

