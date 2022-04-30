Array.prototype.myFilter = function (callback){
    let result = [];
    for(let index = 0; index< this.length; index++) {
      if (callback(this[index])){
        result.push(this[index]);
      }
    }
    return result;
  }
  const arr = [1,3,5,4,9,10,2,5,35];
  let result = arr.myFilter((item)=>{
    return item > 8;
  })
  console.log(result);