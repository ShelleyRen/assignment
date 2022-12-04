/*

Question 1

Given the following array and implement the table dynamically

*/

const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let thead = document.querySelector("thead");
let tr = document.createElement("tr");
const tableHeader = tableInfo.tableHeader.map((item) => {
  let th = document.createElement("th");
  th.textContent = item;
  return th;
});
tr.append(...tableHeader);
thead.appendChild(tr);

const tableBody = document.querySelector("tbody");
let tContent = tableInfo.tableContent;
for (let i = 0; i < tContent.length; i++) {
  let tr = document.createElement("tr");
  tableBody.appendChild(tr);
  for (let k in tContent[i]) {
    let td = document.createElement("td");
    td.innerHTML = tContent[i][k];
    tr.appendChild(td);
  }
}

/*
  
  Question 2
  Given the array and generate order list and unordered list dynamically as following:
  
  */

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
let ol = document.querySelector("#ol");
function nodes(list) {
  let nodes = list.map((item) => {
    let li = document.createElement("li");
    li.textContent = item;
    return li;
  });
  return nodes;
}
ol.append(...nodes(list));
let ul = document.querySelector("#ul");
ul.append(...nodes(list));
/*
  
  Question 3
  Given a array and implement a dropdown list with the following options dynamically 
  FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
  
  */

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.querySelector("#select");
let options = dropDownList.map((item) => {
  let option = document.createElement("option");
  option.textContent = item.content;
  option.value = item.value;
  return option;
});
select.append(...options);
