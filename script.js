//variables for date picker

const datePicker = document.getElementById("datePicker");
const chosenDate = document.getElementById("chosenDate");

//variables for printing values

const ageYears = document.getElementsByClassName("age-years");
const ageMonths = document.getElementsByClassName("age-months");
const ageDays = document.getElementsByClassName("age-days");
const ageHours = document.getElementsByClassName("age-hours");
const ageMinutes = document.getElementsByClassName("age-minutes");
const ageSeconds = document.getElementsByClassName("age-seconds");
const ageMs = document.getElementsByClassName("age-ms");

if (datePicker) {
  datePicker.addEventListener("change", function () {
    alert(this.value);
  });
} else {
  console.log("datepicker element not found");
}
