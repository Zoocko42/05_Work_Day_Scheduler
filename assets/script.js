var timeblocks = document.getElementById("timeblocks");
var timeblock = document.getElementsByClassName("time-blocks");
var nineAM = document.getElementById("9")
var tenAM = document.getElementById("10")
var elevenAM = document.getElementById("11")
var twelveAM = document.getElementById("12")
var onePM = document.getElementById("13")
var twoPM = document.getElementById("14")
var threePM = document.getElementById("15")
var fourPM = document.getElementById("16")
var fivePM = document.getElementById("17")
var timeblockArray = [nineAM, tenAM, elevenAM, twelveAM, onePM, twoPM, threePM, fourPM, fivePM]

// This code adds the current date using moment.js to the #currentDay id in the format "Day, Month, Date of Month".
var headerDate = moment().format("dddd, MMMM Do");
$("#currentDay").text(headerDate);

var currentHour = moment().format("H")
console.log(currentHour);
console.log(nineAM.id);

for (var i = 0; i < (timeblockArray.length); i++) {
    if (timeblockArray[i].id == currentHour) {
        timeblockArray[i].setAttribute("style", "background-color: #ff6961; color: white")
    } else if (timeblockArray[i].id < currentHour) {
        timeblockArray[i].setAttribute("style", "background-color: #d3d3d3; color: black")
    } else {
        timeblockArray[i].setAttribute("style", "background-color: #77dd77; color: white")
    }
};

function saveFieldValue () {};

