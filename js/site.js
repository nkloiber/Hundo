function getNumbers(){
    //access the webpage get values from inputs
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;

    let newStart = parseInt(startValue);
    let newEnd = parseInt(endValue);

    let errorState = false;
    let errorMsg = "";
//checks only numbers are being used
    if (isNaN(newStart) || isNaN(newEnd)) {
        errorState = true;
        errorMsg += "Please use numbers!<hr/>"
    }
//checks that start value is lower
    if (newStart > newEnd) {
        errorState = true;
        errorMsg +=  "Start value must be less than end value!<hr/>"
    }
//sets a range so that computer doesnt blow up
    if (newStart > 10000 || newStart < -10000 || newEnd > 10000 || newEnd <-10000) {
        errorState = true;
        errorMsg += "-10,000 and 10,000 are the limit!<hr/>"
    }
//broad sweetalert error message that stops the function
    if(errorMsg){
        Swal.fire(
            'Something went wrong!',
            `${errorMsg}`,
            'error'
          )
    }

    //take start and end values as bounds for a 'for' loop
    // will create array and return it
    let numbers = generateNumbers(newStart, newEnd);

    //take array that was returned and pass it into a function that will display it
    displayNumbers(numbers);
    
}

//wrapper function/method calls other functions

function generateNumbers(startValue, endValue){
    let numbers = [];

    //loop over every number from startValue to endValue
    for(let index = startValue; index <= endValue; index++){
        numbers.push(index)
    }
//sends array back to wrapper
    return numbers;
}
//displays the results to the user
function displayNumbers(numbers){
    //creates a string to hold class name based on even or odd
    let className = "even";
    //creates string to hold output
    let templateRows = "";

    for(let index = 0; index < numbers.length; index++){
        let number = numbers[index];
    //checks the remainder of number when divided by 2
    //if remainder is 0 then it is given class even 
    //if not then it is given class odd
        if(number % 2 == 0){
            className = "even";
        } else {
            className = "odd";
        }
    //creates string of html to display
        templateRows = templateRows + `<tr><td class="${className}">${number}</td></tr>`;
    }
    document.getElementById("output").innerHTML = templateRows
}