var timeblocks = document.getElementById("timeblocks");
var tableHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"]

// This code adds the current date using moment.js to the #currentDay id in the format "Day, Month, Date of Month".
var headerDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(headerDate);

var currentHour = moment().format("hA")
console.log(currentHour);

