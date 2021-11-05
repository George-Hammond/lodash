const _ = {
// implement clamp method
  clamp(number, lower, upper){

    const lowerClampedValue = Math.max(number, lower);
    const clampedValue = Math.min(lowerClampedValue, upper);
      return clampedValue;
  },

  //implement inRange method
  inRange(number, start, end){

    if (end === undefined){
      end = start;
       start = 0;
    }
    if (start > end){
      let temp = end;
      end = start;
      start = temp;
      
    }
    let isInRange = (start <= number && number < end)
    return isInRange;

  },
//implement words method
words(string){
let words = string.split(' ');
return words;
},
 pad(string, length){
   if ( length <= string.length ){
     return string;
     }
  let startPaddingLength = Math.floor((length-string.length)/2);

  let endPaddingLength = (length - string.length) - startPaddingLength;

  let paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);

  return paddedString;
   
 },
 //implementing the has method
 has(object, key){
   let hasValue = object[key]
   if (hasValue !== undefined){
     return true;
   } else {
     return false;
   }
   return hasValue;
  
 },
 //implementing the invert method
 invert(object){
let invertedObject = {}
for (let key in object){
  let originalValue = object[key];
  invertedObject[originalValue] = key;
}
return invertedObject;

 },
//implement the findKey method
 findKey(object, predicate){
   for(key in object){
     let value = object[key];
     let predicateReturnValue = predicate(value);
     if (predicateReturnValue === true){
       return key;
     }
     
   }
 },
// implement the drop method
drop(array, n){
if( n === undefined){
  let n = 1;
  return array.slice(n, array.length)

}
let droppedArray = array.slice(n, array.length);
return droppedArray;
},

//implement the dropwhile method
dropWhile (array, predicate) {
    const callback= (element, index)=>{
    return !predicate(element,index,array);
  }
  let dropNumber = array.findIndex(callback);
  let droppedArray = this.drop(array, dropNumber);
  return droppedArray;
},
//implement the chunk method
chunk(array, size){
  if (size === undefined){
    let size = 1;
  }
  let arrayChunks = [];
  for(i=0; i< array.length; i+ size){
    let arrayChunk = array.slice(i,i+= size)
    arrayChunks.push(arrayChunk);
  }
  return arrayChunks;
}

};

// Do not write or modify code below this line.
module.exports = _;