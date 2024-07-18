
let employees = [];


function addEmployee(id, name, position, salary) {
    const employee = { id, name, position, salary };
    employees.push(employee);
    saveEmployees();
    console.log(`Employee ${name} added.`);
}

function listEmployees() {
    console.log("Employee List:");
    employees.forEach(employee => {
        console.log(`ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}, Salary: ${employee.salary}`);
    });
}


function findEmployeeById(id) {
    const employee = employees.find(emp => emp.id === id);
    if (employee) {
        console.log(`Employee found: ID: ${employee.id}, Name: ${employee.name}, Position: ${employee.position}, Salary: ${employee.salary}`);
        return employee;
    } else {
        console.log(`Employee with ID ${id} not found.`);
        return null;
    }
}

function updateEmployee(id, newInfo) {
    const employee = findEmployeeById(id);
    if (employee) {
        Object.assign(employee, newInfo);
        saveEmployees();
        console.log(`Employee ${id} updated.`);
    }
}


function deleteEmployee(id) {
    const index = employees.findIndex(emp => emp.id === id);
    if (index !== -1) {
        employees.splice(index, 1);
        saveEmployees();
        console.log(`Employee ${id} deleted.`);
    } else {
        console.log(`Employee with ID ${id} not found.`);
    }
}

function saveEmployees() {
    localStorage.setItem('employees', JSON.stringify(employees));
}

function loadEmployees() {
    const data = localStorage.getItem('employees');
    if (data) {
        employees = JSON.parse(data);
    }
}
