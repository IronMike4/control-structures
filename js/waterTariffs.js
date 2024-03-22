/* This is the waterTeller.js file that asks for user input then calculates the water tariff output based on the input.
If a user enters an invalid input, the user is prompted to try again twice.
I had to do a bit of research to understand the concept more and the following sites were quite helpful:
 - https://www.tektutorialshub.com/javascript/javascript-if-else-nested-if-statement/
 - https://www.w3schools.com/jsref/jsref_isnan_number.asp
For more information about this please visit https://github.com/IronMike4/control-structures */

// Declaring variables to store water usage
let userInputLitres;
let waterUsageInKilolitres;

// Getting the user input
userInputLitres = prompt("Enter the number of litres of water used:");

// Converting the water usage from litres to kilolitres
waterUsageInKilolitres = Number(userInputLitres) / 1000;

// Checking if the user input is valid
if (isNaN(waterUsageInKilolitres)) {
  // Prompting the user to try again if the input is invalid
  userInputLitres = prompt(
    "The input is invalid! Please enter a valid number of litres of water used:"
  );
  waterUsageInKilolitres = Number(userInputLitres) / 1000;

  // Checking if the user input is valid
  if (isNaN(waterUsageInKilolitres)) {
    // Prompting the user to try again if the input is invalid
    userInputLitres = prompt(
      "The input is invalid! Please enter a valid number of litres of water used:"
    );
    waterUsageInKilolitres = Number(userInputLitres) / 1000;
  }
}

// Defining tariff rates per kilolitre for different water steps
const waterTariffStep1 = 15.73;
const waterTariffStep2 = 22.38;
const waterTariffStep3 = 31.77;
const waterTariffStep4 = 69.76;

// Initializing the total bill variable
let totalBill = 0;

// Calculating total bill based on water steps
if (waterUsageInKilolitres <= 6) {
  totalBill = waterUsageInKilolitres * waterTariffStep1;
} else if (waterUsageInKilolitres <= 10.5) {
  totalBill =
    6 * waterTariffStep1 + (waterUsageInKilolitres - 6) * waterTariffStep2;
} else if (waterUsageInKilolitres <= 35) {
  totalBill =
    6 * waterTariffStep1 +
    4.5 * waterTariffStep2 +
    (waterUsageInKilolitres - 10.5) * waterTariffStep3;
} else {
  totalBill =
    6 * waterTariffStep1 +
    4.5 * waterTariffStep2 +
    24.5 * waterTariffStep3 +
    (waterUsageInKilolitres - 35) * waterTariffStep4;
}

// Rounding the total bill to 2 decimal places
const roundedOffTotalBill = Math.round(totalBill * 100) / 100;

// Defining the water tariff message
const tariffMessage = `Your water tariff is R${roundedOffTotalBill}.`;

// Displaying the water tariff message on the page
document.body.innerHTML = `<h2>Water Tariff:</h2><p>${tariffMessage}</p>`;
