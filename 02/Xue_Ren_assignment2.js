/*

Question 1

Given the array, implement a function for generating a new array which doubles the quantity and price in each object.
Given the array, implement a function for generating a new array which contains item quantity > 2 and price > 300 only.
Given the array, implement a function to calculate the total value of the items.

*/

const itemsObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

function doubleQuantityAndPrice(itemsObject) {
  return itemsObject.map((item) => {
    return {
      quantity: item.quantity * 2,
      price: item.price * 2,
    };
  });
}

function filterItems(itemsObject) {
  return itemsObject.filter((item) => {
    return item.quantity > 2 && item.price > 300;
  });
}

function totalValue(itemsObject) {
  return itemsObject.reduce((value, item) => {
    return value + item.price * item.quantity;
  }, 0);
}

console.log("Question 1 double: ", doubleQuantityAndPrice(itemsObject));
console.log("Question 1 filter: ", filterItems(itemsObject));
console.log("Question 1 total: ", totalValue(itemsObject));

/*

Question 2

Given the string, implement a function to remove all the non-alphabet characters and extra space in the string and convert the string to all lowercase.

*/

const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";

const expectedReturnString =
  "perhaps the easiest to understand case for reduce is to return the sum of all the elements in an array";

function returnString(str) {
  ans = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z,' ',-]/i)) {
      ans += str[i];
    }
  }

  ans = ans.replace(/\s{2,}/g, " ").trim();
  ans = ans.replace(/-/g, " ").trim();
  ans = ans.toLowerCase();
  return ans;
}

var ans = returnString(
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  "
);
console.log("Question 2: ", ans);

/*

Question 3

Implement a function to merge two arrays of objects on uuid, but first has uuid and name, second has uuid and role. With the not existing property, fill with null. Sort according to uuid after merge.

*/

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];

const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];

const expectedReturnArray = [
  { uuid: 1, role: "manager", name: null },
  { uuid: 2, role: "associate", name: "test" },
  { uuid: 3, role: null, name: "test3" },
  { uuid: 4, role: "engineer", name: null },
  { uuid: 5, role: null, name: "test5" },
  { uuid: 6, role: "pm", name: null },
];

function merge(first, second) {
  const third = [];
  for (const item of first) {
    const index = second.findIndex((i) => i.uuid === item.uuid);
    if (index !== -1) {
      const { uuid, role, name } = { ...item, ...second[index] };
      third.push({ uuid, role, name });
    } else {
      const { uuid, name } = item;
      third.push({ uuid, role: null, name });
    }
  }
  for (const item of second) {
    const index = third.findIndex((i) => i.uuid === item.uuid);
    if (index === -1) {
      const { uuid, role } = item;
      third.push({ uuid, role, name: null });
    }
  }
  return third.sort((a, b) => a.uuid - b.uuid);
}

let ans2 = merge(first, second);
console.log("Question 3: ", ans2);
