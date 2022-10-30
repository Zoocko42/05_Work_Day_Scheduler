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

//This code adds the current hour in a 24-hour timeframe.
var currentHour = moment().format("H")

//This code iterates through each timeblock and changes the background color in relation to the current hour.
for (var i = 0; i < (timeblockArray.length); i++) {
    if (parseInt(timeblockArray[i].id) == parseInt(currentHour)) {
        timeblockArray[i].setAttribute("style", "background-color: #ff6961; color: white")
    } else if (parseInt(timeblockArray[i].id) < parseInt(currentHour)) {
        timeblockArray[i].setAttribute("style", "background-color: #d3d3d3; color: black")
    } else {
        timeblockArray[i].setAttribute("style", "background-color: #77dd77; color: white")
    }
};

// This code iterates through each of the timeblocks, checks local storage, and sets the appropriate value.
timeblockArray.forEach(element => {
    element.innerHTML = localStorage.getItem(element.id)
})

// This function is called by a button press in index.html; when the save buttons are pressed, each field is
// iterated through and its value saved to local storage. The value is not saved if the button is not pressed.
// The foreach statement above will ensure that any saved value is visible again even on page refresh.
function saveFieldValue() {
    timeblockArray.forEach(element => {
        localStorage.setItem(element.id, element.value)
    });
}





