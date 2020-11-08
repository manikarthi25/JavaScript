calculateMaxAndMinNumber = function (array1, array2) {
  const mergeArray = array1.concat(array2);
  console.log("Merge Array is " + mergeArray);

  let max = mergeArray[0];
  let min = mergeArray[0];

  for (let i = 0; i < mergeArray.length; i++) {
    if (typeof mergeArray[i] !== "number") continue;
    if (mergeArray[i] > max) max = mergeArray[i];

    if (mergeArray[i] < min) min = mergeArray[i];
  }

  console.log("Max Value is " + max);
  console.log("Min Value is " + min);

  let avg = max - min;
  console.log("Average Value is " + avg);
};

calculateMaxAndMinNumber([4, 6, 8, "error", 10], [1, 2, 3, 9, 4]);

//let msg = "hello world";
//if (msg === "hello world") alert("Hello World!");
//console.log(20 + 26 - 2);
