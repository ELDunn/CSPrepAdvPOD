//Challenge 1 
function modemean(array) {
  // organize the array
  function compareNumbers(a, b) {
  return a - b;
  }
  array.sort(compareNumbers);
  //console.log(array)
  // calculate mean
  let mean = Math.floor((array.reduce((acc, curr) => acc + curr, 0))/array.length);
  //calculate mode
  //create an object that keeps track of number and how many times it is in the array.
  let modeObj = {};
  //iterate through our array. 
  array.forEach((number) =>{
    //if object with key value of the number in the array is not in the obj, add it with a value of 0, othwerwise increase its value by one. 
    if (modeObj[number] === undefined){modeObj[number] = 0;}
    else {modeObj[number] +=1;}
    return modeObj;
  });
  //set mode to the first item in our array to ensure it captures correct range.
  let mode = array[0];
  for (let key in modeObj){
    /*check to see if our object at item [key] is larger than the value of our object with [mode] if it is it means that the count is higher ans thus this number appears more in our array. This works even if there are two numbers with equal count in the array, becuase weve already organized our array from hightest to lowest.*/
    if (modeObj[key] >= modeObj[mode]){
      mode = key;
    }
  }
  // compare two values
  return mode === mean;
}


modemean([1, 5, 3, 2, 10, 2, 5, 7, 22, 10, 10, 7, 7, 7, 10]);
