/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map((element) => {
    if (element.profession === 'developer') {
        console.log(
          `ID: ${element.id} ,Name: ${element.name} ,Age: ${element.age} ,Profession: ${element.profession}`
        );
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((element) => {
    if (element.profession === `developer`) {
        console.log(
          `ID: ${element.id} ,Name: ${element.name} ,Age: ${element.age} ,Profession: ${element.profession}`
        );
    }
  })
}

function addData() {
  //Write your code here, just console.log
  let newObj = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newObj)
  arr.map((element) => { 
      console.log(
        `ID: ${element.id} ,Name: ${element.name} ,Age: ${element.age} ,Profession: ${element.profession}`
      );
    
  });
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((element) => {
    return element.profession !== 'admin'
  })
  arr.map((element) => {

      console.log(
        `ID: ${element.id} ,Name: ${element.name} ,Age: ${element.age} ,Profession: ${element.profession}`
      );
    
  });
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 5, name: "Avi", age: "28", profession: "CFO" },
    { id: 6, name: "vishal", age: "38", profession: "CTO" },
    { id: 7, name: "rahul", age: "48", profession: "CEO" },
  ];
  arr = arr.concat(newArr)

  arr.map((element) => {
    console.log(
      `ID: ${element.id} ,Name: ${element.name} ,Age: ${element.age} ,Profession: ${element.profession}`
    );
  })
}
