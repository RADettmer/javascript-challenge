// app.js file - Randy Dettmer 2020/05/04 - level 2
// assign the data from data.js to a descriptive variable
var tableData = data;

var tbody = d3.select("tbody");

// use d3 to display data //
data.forEach(function(tableData) {
    //console.log(tableData);
    var row = tbody.append("tr");
    Object.entries(tableData).forEach(function([key, value]) {
        //console.log(key,value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// select the button //
var button = d3.selectAll("#filter-btn");

// select the form //
var form = d3.selectAll("#form");

//test test
/*
var theParent = document.querySelector("#filter-btn");
theParent.addEventListener("click", runEnter, false);
*/

/* - do not run -
theParent.addEventListener("click", doSomething, false);

function doSomething(e) {
    if (e.target !== e.currentTarget){
        var clickedItem = e.target.id;
        alert("Hello" + clickedItem);
    }
    e.stopPropagation();
}
*/

// create event handlers //
button.on("click", runEnter, false);
form.on("submit", runEnter, false);

// complete the event handler function for the form //
function runEnter() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // clear any prior data in table
    tbody.html("");

    //test to accpet all values
/*    var datetime = d3.select("#datetime");
    var city = d3.select("#city");
    var state = d3.select("#state");
    var shape = d3.select("#shape");

    //filter data

*/
    // test for empty value
   if (d3.select("#datetime").length !==0) {
        var inputElement = d3.select("#datetime");
        //console.log(inputElement);
        var inputValue = inputElement.property("value");
        console.log(inputValue);
        // filter data on input element
        var filteredData = tableData.filter(data => data.datetime === inputValue);
        console.log(filteredData);
    } 
    else if (d3.select("#city").length !==0) {
        var inputElement = d3.select("#city");
        console.log(inputElement);
        var inputValue = inputElement.property("value");
        console.log(inputValue);
        // filter data on input element
        var filteredData = tableData.filter(data => data.city === inputValue);
        console.log(filteredData);
    } 
    else if (d3.select("#state") !=="") {
        var inputElement = d3.select("#state");
        console.log(inputElement);
        var inputValue = inputElement.property("value");
        console.log(inputValue);
        // filter data on input element
        var filteredData = tableData.filter(data => data.state === inputValue);
        console.log(filteredData);       
    } 
    else {
        var inputElement = d3.select("#shape");
        var inputValue = inputElement.property("value");
        console.log(inputValue);
        // filter data on input element
        var filteredData = tableData.filter(data => data.shape === inputValue);
        console.log(filteredData);       
    }


    // render the filtered data in the table
    filteredData.forEach(function(displayData) {
        var row = tbody.append("tr");
        Object.entries(displayData).forEach(function([key, value]) {
            //console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

