function doException(){
  throw new Error('오류 발생!')
}

function noException(){
  return true;
}

function callException(type){
  if(type == 'do'){
    doException()
  }else{
    if(noException() == false){
      console.log('오류처리')
    }
  }
}

function main(){
  try {
    noException();
  } catch (error) {
    console.log(error)
  }finally {
    console.log('done')
  }
}

main();