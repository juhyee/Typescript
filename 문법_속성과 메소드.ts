/*

*/

type MyObject = {
  name?: string,
  age: number,
  getFamilyName: () => string,
  getLastName: () => string,
  getBloodType: () => string,
}

const obj: MyObject = {
    name: 'Min Tae',
    age: 40,
    getFamilyName: function(){
      return 'Kim'
    },
    //화살표 함수
    getLastName: () => 'Kim',
    // 축약형
    getBloodType(){
      return 'B'
    },

}

obj.name;
obj.age;
obj.getFamilyName();
obj.getBloodType();

// 옵셔널이 아니기 때문에 에러가 난다. 옵셔널 사용방법 name?: string,
delete obj.name;

obj.age = 200;
obj.age = -200; //문제가 있는 객체


// setter, getter
class Person {
  _bloodType: string;

  constructor(bloodType: string){
    this._bloodType = bloodType;
  }

  set bloodType(btype: string){
    if(btype == 'A' || btype == 'B' || btype == 'AB' || btype == 'O'){
      this._bloodType = btype;
    }
  }

  get bloodType() {
    return `${this._bloodType} 형`;
  }

}

const p1 = new Person('B');
p1.bloodType;
p1.bloodType = 'C'


// js에서는 오류
// const myObject = {
//   name: string,
// }

const myObj = Object.create(null, {
  name: {
    value: 'Kim mintae',
    writable: true,
    configurable: false
    // configurable 속성 삭제 안됨
  }
})

myObj.name = '하하하'