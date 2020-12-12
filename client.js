$(document).ready(handleReady);

let employees = [];

function handleReady() {
    console.log('JQ Loaded');
    $('#submitButton').on('click', enterEmployee);
    $('#employeeList').on('click', '.deleteButton', deleteEmployee);
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
    calculateMonthlySalaries();

} // end enterEmployee

function renderToDom() {
    // empty list
    $('#employeeList').empty();
    //for loop to display employees array
    for (let i = 0; i < employees.length; i++) {

        let employeeRow = $(`
            <tr class="employee" id="employee${i}">
             <td>${employees[i].firstName}</td>
             <td>${employees[i].lastName}</td>
             <td>${employees[i].id}</td>
             <td>${employees[i].title}</td>
             <td>$${employees[i].annualSalary}</td>
             <td><button class="deleteButton">Delete</button></td>
            </tr>
        `);
        $('#employeeList').append(employeeRow);
        $(`#employee${i}`).data('index', i)
    }
} // end renderToDom

function clearInputs() {
    $('#firstNameIn').val('');
    $('#lastNameIn').val('');
    $('#idIn').val('');
    $('#titleIn').val('');
    $('#salaryIn').val('');
} // end clearInputs

function deleteEmployee() {
    // console.log('clicked delete');

    // assign variable to removed item
    let employeeIndex = $(this).parent().parent().data('index');
    console.log(employeeIndex);

    // remove from DOM
    //$(this).closest('tr').remove(); //don't need now with renderToDom called in here

    // delete from array
    deleteFromArray(employeeIndex);

    // update DOM
    renderToDom();

    // update total monthly salaries
    calculateMonthlySalaries();
} // end deleteEmployee


function calculateMonthlySalaries() {
    let totalMonthlySalaries = 0;
    for (let employee of employees) {
        let monthlySalary = Number(employee.annualSalary) / 12;
        totalMonthlySalaries += monthlySalary;
    }
    $('#totalMonthlyOut').empty();
    $('#totalMonthlyOut').append(totalMonthlySalaries.toFixed(2));

    //if totalMonthly salaries > 20k, turn background red
    if (totalMonthlySalaries > 20000) {
        $('#totalMonthlyOut').addClass('overBudget');
    } else {
        $('#totalMonthlyOut').removeClass('overBudget');
    } // end if

} // end calculateMonthlySalaries

function deleteFromArray(index) {
    // remove object in array at given index
    employees.splice(index, 1);

} // end deleteFromArray