class Employee {
    constructor(empId, empName) {
        this.empId = empId;
        this.empName = empName;
    }
}

// creating object
let e1 = new Employee(201, "Rahul");

// accessing properties
console.log("Employee ID:", e1.empId);
console.log("Employee Name:", e1.empName);
// Output:
// Employee ID: 201
// Employee Name: Rahul