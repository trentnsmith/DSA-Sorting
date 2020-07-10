let DATA = [
    89,
    30,
    25,
    32,
    72,
    70,
    51,
    42,
    25,
    24,
    53,
    55,
    78,
    50,
    13,
    40,
    48,
    32,
    26,
    2,
    14,
    33,
    45,
    72,
    56,
    44,
    21,
    88,
    27,
    68,
    15,
    62,
    93,
    98,
    73,
    28,
    16,
    46,
    87,
    28,
    65,
    38,
    67,
    16,
    85,
    63,
    23,
    69,
    64,
    91,
    9,
    70,
    81,
    27,
    97,
    82,
    6,
    88,
    3,
    7,
    46,
    13,
    11,
    64,
    76,
    31,
    26,
    38,
    28,
    13,
    17,
    69,
    90,
    1,
    6,
    7,
    64,
    43,
    9,
    73,
    80,
    98,
    46,
    27,
    22,
    87,
    49,
    83,
    6,
    39,
    42,
    51,
    54,
    84,
    34,
    53,
    78,
    40,
    14,
    5
  ];

function qSort(arr, start=0, end=arr.length) {
  if (start >= end) {
    return arr;
  }
  const middle = partition(arr, start, end);
  arr = qSort(arr, start, middle);
  arr = qSort(arr, middle+1, end);
  return arr;
}

function partition(arr, start, end) {
  const pivot = arr[end-1];
  let j = start;
  for (let i = start; i < end-1; i++) {
    if(arr[i] <= pivot) {
      swap(arr, i, j);
      j++;
    }
  }
  swap(arr, end-1, j);
  return j;
}

function swap (arr, i, j) {
  const tmp = arr[i];
  arr[i] = arr[j];
  arr[j] = tmp;
}

function main(){
  const sorted = qSort(DATA);
  console.log(sorted);
  let ok = true;
  for (let i=0; i<sorted.length-1; i++) {
    if (sorted[i] > sorted[i+1]) ok = false;
  }
  console.log(ok);
}
main();


function mSort(array) {
    if (array.length <= 1) {
      return array;
    }
  
    const middle = Math.floor(array.length / 2);
    let left = array.slice(0, middle);
    let right = array.slice(middle, array.length);
  
    left = mSort(left);
    right = mSort(right);
    return merge(left, right, array);
  }
  
  function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        array[outputIndex++] = left[leftIndex++];
      } else {
        array[outputIndex++] = right[rightIndex++];
      }
    }
  
    for (let i = leftIndex; i < left.length; i++) {
      array[outputIndex++] = left[i];
    }
  
    for (let i = rightIndex; i < right.length; i++) {
      array[outputIndex++] = right[i];
    }
    return array;
  }
  
  function bucketSort(
    array,
    start = 0,
    end = array.length - 1,
    bucketArray = []
  ) {
    if (array.length > 0) {
      let minIndex = array.indexOf(Math.min(...array));
      bucketArray.push(array[minIndex]);
      array.splice(minIndex, 1);
      bucketSort(array, 0, array.length - 1, bucketArray);
    }
    if (array.length === 0) {
      return bucketArray;
    }
  }

  function SortBooks(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
  
    left = SortBooks(left);
    right = SortBooks(right);
    return merge(left, right, arr);
  }