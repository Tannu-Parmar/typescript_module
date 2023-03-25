interface Employee {
  id: number;
  firstName: string;
  lastName: string;
  address: string;
  salary: number;
}

let employees: Employee[] = [
  {
    id: 1,
    firstName: "John",
    lastName: "Doe",
    address: "123 Main St.",
    salary: 50000,
  },
  {
    id: 2,
    firstName: "Jane",
    lastName: "Smith",
    address: "456 Elm St.",
    salary: 60000,
  },
  {
    id: 3,
    firstName: "Bob",
    lastName: "Jones",
    address: "789 Oak St.",
    salary: 70000,
  },
  {
    id: 4,
    firstName: "Alice",
    lastName: "Brown",
    address: "234 Maple Ave.",
    salary: 80000,
  },
  {
    id: 5,
    firstName: "Tom",
    lastName: "Johnson",
    address: "567 Pine St.",
    salary: 90000,
  },
];

function displayEmployees() {
  let table = document.querySelector("#employee-table tbody") as HTMLTableElement;
  table.innerHTML = "";

  employees.forEach((e, i) => {
    let row = table.insertRow();
    row.insertCell().innerHTML = i.toString();
    row.insertCell().innerHTML = e.id.toString();
    row.insertCell().innerHTML = e.firstName;
    row.insertCell().innerHTML = e.lastName;
    row.insertCell().innerHTML = e.address;
    row.insertCell().innerHTML = e.salary.toString();
  });
}

function searchByIndex() {
  let indexInput = document.getElementById("index-input") as HTMLInputElement;
  let index = parseInt(indexInput.value);
  let employee = employees[index];
  alert(`Employee at index ${index}: ${JSON.stringify(employee)}`);
}

function searchById() {
  let idInput = document.getElementById("id-input") as HTMLInputElement;
  let id = parseInt(idInput.value);
  let employee = employees.find((e) => e.id === id);
  alert(`Employee with ID ${id}: ${JSON.stringify(employee)}`);
}

function insertEmployee() {
  let idInput = document.getElementById("new-id-input") as HTMLInputElement;
  let firstNameInput = document.getElementById("new-first-name-input") as HTMLInputElement;
  let lastNameInput = document.getElementById("new-last-name-input") as HTMLInputElement;
  let addressInput = document.getElementById("new-address-input") as HTMLInputElement;
  let salaryInput = document.getElementById("new-salary-input") as HTMLInputElement;

  let newEmployee: Employee = {
    id: parseInt(idInput.value),
    firstName: firstNameInput.value,
    lastName: lastNameInput.value,
    address: addressInput.value,
    salary: parseInt(salaryInput.value),
  };
  employees.push(newEmployee);
  displayEmployees();
}

function deleteEmployee() {
  let deleteIndexInput = document.getElementById("delete-index-input") as HTMLInputElement;
  let deleteIndex = parseInt(deleteIndexInput.value);
  let deletedEmployee = employees.splice(deleteIndex, 1)[0];
  alert(`Employee deleted: ${JSON.stringify(deletedEmployee)}`);
  displayEmployees();
}

displayEmployees();
