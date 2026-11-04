// Part 1: Date Display
const currentDate = new Date();

const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();
const year = currentDate.getFullYear();

const formattedMonth = month < 10 ? "0" + month : month;
const formattedDay = day < 10 ? "0" + day : day;

// Display the formatted date on the webpage.
const dateMessage =
    "Today is " + formattedMonth + "/" + formattedDay + "/" + year;

document.querySelector("#dateOutput").innerHTML = dateMessage;

// Part 2: Number Conversion and Validation
const quantityText = "314";
const numericText = "150";
const decimalText = "3.14";
const stringText = "pi";

// Convert each string into a number.
const convertedQuantity = Number(quantityText);
const convertedNumeric = Number(numericText);
const convertedDecimal = Number(decimalText);
const convertedString = Number(stringText);

// Build a paragraph showing each value and its checks.
const quantityResult =
    "<p>Original: '" + quantityText + 
    "' → Converted: " + convertedQuantity +
    " → is NaN: " + Number.isNaN(convertedQuantity) +
    " → is an Integer: " + Number.isInteger(convertedQuantity) + "</p>";

const numericResult =
    "<p>Original: '" + numericText +
    "' → Converted: " + convertedNumeric +
    " → is NaN: " + Number.isNaN(convertedNumeric) +
    " → is an Integer: " + Number.isInteger(convertedNumeric) + "</p>";

const decimalResult =
    "<p>Original: '" + decimalText +
    "' → Converted: " + convertedDecimal +
    " → is NaN: " + Number.isNaN(convertedDecimal) +
    " → is an Integer: " + Number.isInteger(convertedDecimal) + "</p>";

const stringResult =
    "<p>Original: '" + stringText +
    "' → Converted: " + convertedString +
    " → is NaN: " + Number.isNaN(convertedString) +
    " → is an Integer: " + Number.isInteger(convertedString) + "</p>";

// Combine the paragraphs and display them on the webpage.
const conversionResults =
    quantityResult + numericResult + decimalResult + stringResult;

// Part 4: Conditional messages
let conditionalResults = "";

//Check the converted numeric value.
if (Number.isInteger(convertedNumeric)) {
    conditionalResults +=
        "<p>The value '" + convertedNumeric + "' is an integer.</p>";
} else {
    conditionalResults +=
        "<p>The value '" + convertedNumeric + "' is not an integer.</p>";
}

// Check the converted quantity.
if (Number.isInteger(convertedQuantity)) {
    conditionalResults +=
        "<p>The value '" + convertedQuantity + "' is an integer.</p>";
} else {
    conditionalResults +=
        "<p>The value '" + convertedQuantity + "' is not an integer.</p>";
}

// Display the four paragraphs and the conditional messages.
document.querySelector("#numberConversionOutput").innerHTML =
    conversionResults + conditionalResults;

// Part 3: Number Formatting and Math Results
const firstScore = 85;
const secondScore = 92;
const thirdScore = 79;

// Calculate the total and average.
const totalScore = firstScore + secondScore + thirdScore;
const averageScore = totalScore / 3;

// Build the results.
let mathResults = "<p>First score: " + firstScore + "</p>";
mathResults += "<p>Second score: " + secondScore + "</p>";
mathResults += "<p>Third score: " + thirdScore + "</p>";
mathResults += "<p>Total score: " + totalScore + "</p>";
mathResults += "<p>Average score: " + averageScore.toFixed(2) + "</p>";


// Display the results and the message.
document.querySelector("#mathOutput").innerHTML = mathResults;



