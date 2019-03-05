// Merged two ssorted arrays

function mergeSortedArrays(arr1, arr2) {
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;

  const merged = [];
  let array1Item = arr1[0];
  let array2Item = arr2[0];
  let i = 1;
  let j = 1;
  while (array1Item || array2Item) {
    if(!array2Item || array1Item < array2Item) {
      merged.push(array1Item);
      array1Item = arr1[i];
      i++;
    } else {
      merged.push(array2Item);
      array2Item = arr2[j];
      j++;
    }
  }
  return merged;
}

mergeSortedArrays([1,2,3,4,8,9],[5,6,7]);