import "../styles.css";

document.getElementById("app").innerHTML = `
<h1>Array Methods!</h1>
<div>Create our own implementation of built-in array methods</div>
`;

//sort
const sort = (arr) => {
  let temp;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      temp = arr[j];
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
};

const sorted = sort([1, 2, 4, 5, -3, 1, 4, 7, 8, -5]);
// console.log("sorted", sorted);
