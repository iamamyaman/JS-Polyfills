var arr = [1, 2, 4, 8,10, 12];
//array.forEach(callback(currentValue, index, arr))

Array.prototype.myForEach = function (callback){
  for(let index = 0; index< this.length; index++){
    callback(this[index], index, this);
  }
}

arr.myForEach((currentValue)=>{
  console.log(currentValue + 100);

})