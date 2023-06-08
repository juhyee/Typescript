// function ul(child: string): string {
//   return `<ul>${child}</ul>`
// }

// function ol(child: string): string {
//   return `<ol>${child}</ol>`
// }

// function makeLI(
//   container: (child: string) => string,
//   contents: string[]

// ): string {
//   const liList = []

//   for(const content of contents) {
//     liList.push(`<li>${content}</li>`);
//   }
//   return container(liList.join(''))
// }

// const htmlUL = makeLI(ul, ['월', '화', '수', '목', '금', '토', '일'])
// const htmlOL = makeLI(ol, ['봄', '여름', '가을', '겨울'])

// console.log(htmlUL)
// console.log(htmlOL)


function salePrice(discountRate, price){
  return price -  (price * (discountRate * 0.01))
}

console.log('여름세일 - ' + salePrice(30, 567000))
console.log('겨울세일 - ' + salePrice(10, 567000))





function discountPrice(discountRate){
  return function(price){
    return price -  (price * (discountRate * 0.01))
  }
}

console.log('여름세일 - ' + discountPrice(30)(567000))
console.log('겨울세일 - ' + discountPrice(10)(567000))




let summerPrice = discountPrice(30);
let winterPrice = discountPrice(10);

console.log('여름세일 - ' + summerPrice(567000))
console.log('겨울세일 - ' + winterPrice(567000))