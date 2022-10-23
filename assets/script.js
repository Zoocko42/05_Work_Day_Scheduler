// This code adds the current date using moment.js to the #currentDay id in the format "Day, Month, Date of Month".
var headerDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(headerDate);
