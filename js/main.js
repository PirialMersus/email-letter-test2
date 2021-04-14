const form = document.forms.search;
const btn = document.getElementById("btnFind");
const input = document.getElementById("inputFind");

const array = [
  {
    name: "Gena",
    age: 35,
  },
  {
    name: "Oleg",
    age: 27,
  },
  {
    name: "Olya",
    age: 39,
  },
  {
    name: "Nikita",
    age: 40,
  },
];

btn.addEventListener("click", function (event) {
  event.preventDefault();
  setTimeout(() => {
    const arrayItemsName = array[1]["name"];
    if (input.value.toLowerCase() === "google") {
      alert(`Yandex круче. Но это не точно, ${arrayItemsName}`);
    } else {
      alert(`${input.value}, ${arrayItemsName}`);
    }
  }, 3000);
  input.value = "";
});

const superSum = (a, b) => {
  alert(a + b);
};

const randomArray = [1, 2, 4, 7686, 1231, -6, -99, 0];
const maxAndMinValueOfArray = (arr) => {
  let max = arr[0];
  let min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  //   console.log("min=", min);
  //   console.log("max=", max);
};
maxAndMinValueOfArray(randomArray);

let a = "XXX";
let b = "YYY";
b = [a, (a = b)][0];
// console.log(a); // то что было изначально в b
// console.log(b); // то что было изначально в a

const findMaxOfArray = (arr) => {
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  console.log("max=", max);
};
