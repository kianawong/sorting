function bubbleSort(arr) {
  // swap()

  for(let i = 0; i < arr.length; i++){
    for(let j = 0; j < arr.length-i; j++){
      if(arr[j] > arr[j+1]){
        let holder = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = holder
        swap()
      }
    }
  }


  return arr
}


function swap(){
  return 1
}
console.log(bubbleSort([3, 0, 6, 2,1]))
// function swap(){
//   return 'hey'
// }
