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

    // calculate totalMonthlySalaries

} // end enterEmployee

function renderToDom() {
    console.log(employees);
    
} // end renderToDom