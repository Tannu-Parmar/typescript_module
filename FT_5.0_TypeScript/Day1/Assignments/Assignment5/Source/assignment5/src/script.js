var data = [
    { id: 1, name: "asd", city: "rajkot", doj: new Date(2018, 2, 13) },
    { id: 2, name: "asd1", city: "jamnagar", doj: new Date(2019, 2, 14) },
    { id: 3, name: "asd2", city: "surat", doj: new Date(2020, 2, 15) },
    { id: 4, name: "asd3", city: "surat", doj: new Date(2021, 2, 15) },
    { id: 5, name: "asd4", city: "mumbai", doj: new Date(2022, 2, 15) },
];
function displayEmp(data, tableDiv) {
    var div = document.getElementById(tableDiv);
    div.innerHTML = "";
    var table = document.createElement("table");
    var row = "<tr><th>id</th><th>name</th><th>City</th><th>Date</th></tr>";
    data.map(function (e) {
        row += "<tr><td>".concat(e.id, "</td><td>").concat(e.name, "</td><td>").concat(e.city, "</td><td>").concat(e.doj.toISOString().slice(0, 10), "</td></tr>");
    });
    table.innerHTML = row;
    div.append(table);
}
function searchEmp() {
    var inputEmp = document.getElementById("empId");
    var id = parseInt(inputEmp.value);
    var emp = data.find(function (e) { return e.id === id; });
    var test = [emp];
    displayEmp(test, "searchEmpTable");
}
function searchEmpAfter() {
    var emp = data.filter(function (e) { return e.doj.getFullYear() > 2020; });
    var test = [];
    emp.forEach(function (e) {
        test.push(e);
    });
    // console.log(test);
    displayEmp(emp, "afterTable");
}
function searchEmpJoinCity() {
    var emp = data.filter(function (e) { return e.doj.getFullYear() > 2020 && e.city === "mumbai"; });
    var test = [];
    emp.forEach(function (e) {
        test.push(e);
    });
    displayEmp(emp, "afterTableJoinCity");
}
displayEmp(data, "app");
