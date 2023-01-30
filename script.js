//variables for date picker

const datePicker = document.getElementById("datePicker");
const chosenDate = document.getElementById("chosenDate");

//variables for printing values

const ageYears = document.getElementById("age-years");
const ageMonths = document.getElementById("age-months");
const ageDays = document.getElementById("age-days");
const ageHours = document.getElementById("age-hours");
const ageMinutes = document.getElementById("age-minutes");
const ageSeconds = document.getElementById("age-seconds");
const ageMs = document.getElementById("age-ms");
const daysRemain = document.getElementById("days-remain");
const resetBtn = document.getElementById("resetBtn");

datePicker.addEventListener("change", function () {
  let options = { year: "numeric", month: "long", day: "numeric" };
  let selectedDate = new Date(this.value);
  let DOB = selectedDate.toLocaleDateString("en-US", options);

  chosenDate.innerHTML = "DOB:" + "" + DOB;

  let ms_Btw_DOB = Date.parse(DOB);

  let ms_Btw_Now = Date.now();

  let age_in_ms = ms_Btw_Now - ms_Btw_DOB;

  //   ageMs.innerHTML = age_in_ms;

  let Ms = age_in_ms;

  // defining the time values
  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;
  let month = 2629746000; //average length of month in millisecond
  let year = day * 365;

  //starting calculation;

  let years = Math.round(Ms / year);

  let days = Math.round(Ms / day);
  let months = Math.round(Ms / month);
  let hours = Math.round(Ms / hour);
  let minutes = Math.round(Ms / minute);
  let seconds = Math.round(Ms / second);

  //printing the values
  ageYears.innerHTML = years;
  ageMonths.innerHTML = months;
  ageDays.innerHTML = days;
  ageHours.innerHTML = hours;
  ageMinutes.innerHTML = minutes;
  ageSeconds.innerHTML = seconds;
  ageMs.innerHTML = Ms;

  //Calculate the time between now and next birthday
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let birthday = new Date(
    currentYear,
    selectedDate.getMonth(),
    selectedDate.getDate()
  );

  //if the birthday has already passed this year,set it to next year
  if (currentDate > birthday) {
    birthday = new Date(
      currentYear + 1,
      selectedDate.getMonth(),
      selectedDate.getDate()
    );
  }

  let diff = birthday - currentDate;

  //converting the difference from millisecond to days
  let daysToNextBirthday = Math.floor(diff / (1000 * 60 * 60 * 24));

  daysRemain.innerHTML = daysToNextBirthday + "days";

  document.querySelector(".age-calc").classList.add("expand");
});

resetBtn.addEventListener("click", function () {
  ageYears.innerHTML = "";
  ageMonths.innerHTML = "";
  ageDays.innerHTML = "";
  ageHours.innerHTML = "";
  ageMinutes.innerHTML = "";
  ageSeconds.innerHTML = "";
  ageMs.innerHTML = "";
  daysRemain.innerHTML = "";
  chosenDate.innerHTML = "";

  datePicker.value = "";

  document.querySelector(".age-calc").classList.remove("expand");
});

// let months = Math.floor(remaining / month);
// remaining = remaining % month;

// let days = Math.floor(remaining / day);
// remaining = remaining % day;

// let hours = Math.floor(remaining / hour);
// remaining = remaining % hour;

// let minutes = Math.floor(remaining / minute);
// remaining = remaining % minute;

// let seconds = Math.floor(remaining / second);

// //printing the values
// ageYears.innerHTML = years;
// ageMonths.innerHTML = months;
// ageDays.innerHTML = days;
// ageHours.innerHTML = hours;
// ageMinutes.innerHTML = minutes;
// ageSeconds.innerHTML = seconds;
// ageMs.innerHTML = Ms;

// document.querySelector(".age-calc").classList.add("expand");
// });
