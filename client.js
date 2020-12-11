$(document).ready(handleReady);

function handleReady() {
    console.log('JQ Loaded');
    $('#submitButton').on('click', enterEmployee);
} // end handleReady

function enterEmployee() {
    console.log('clicked');
    
} // end enterEmployee