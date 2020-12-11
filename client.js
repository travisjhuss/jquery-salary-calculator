$(document).ready(handleReady);

let employees = [];

function handleReady() {
    console.log('JQ Loaded');
    $('#submitButton').on('click', enterEmployee);
} // end handleReady

function enterEmployee() {
    console.log('clicked');
    // create employee object
    let newEmployee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        id: $('#idIn').val(),
        title: $('#titleIn').val(),
        annualSalary: $('#salaryIn').val()
    }
    // console.log(newEmployee);
    // push into employee array
    employees.push(newEmployee);
    // console.log(employees);

    // render to DOM
    renderToDom();
    // clear inputs
    clearInputs();
    // calculate totalMonthlySalaries

} // end enterEmployee

function renderToDom() {
    // empty list
    $('#employeeList').empty();
    //for loop to display employees array
    for (let employee of employees) {

        let employeeRow = $(`
            <tr class="employee">
             <td>${employee.firstName}</td>
             <td>${employee.lastName}</td>
             <td>${employee.id}</td>
             <td>${employee.title}</td>
             <td>${employee.annualSalary}</td>
             <td>Delete</td>
            </tr>
        `);
        $('#employeeList').append(employeeRow);
    }
} // end renderToDom

function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');
} // end clearInputs