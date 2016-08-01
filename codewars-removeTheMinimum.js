function removeSmallest(numbers) {
 var sorted = numbers.sort(function(a, b) {return a-b});
 //sort the array into lowest to highest
 var boring = sorted[0];
 //set boring equal to the lowest position
 var position = numbers.indexOf(boring);
 //search for boring's position within the original array
 var exciting = numbers.splice(position, 1);
 //splice that position from the original array
 return exciting
 //return the new spliced array

}
