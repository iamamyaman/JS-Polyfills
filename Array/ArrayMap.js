Array.prototype.ourMap = function(callback) {
    var arr = [] // since, we need to return an array
    for (var i = 0; i < this.length; i++) {
      arr.push(callback(this[i], i, this)) // pushing currentValue, index, array
    }
    return arr // finally returning the array
  }
  let input =[1,34,5];
  let result = input.ourMap((item)=>{return item = item*2})
  console.log(result)
  
  
  
  