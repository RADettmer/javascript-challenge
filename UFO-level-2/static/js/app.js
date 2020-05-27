// app.js file - Randy Dettmer 2020/05/27 - level 2
// assign the data from data.js to a descriptive variable
var tableData = data;

var tbody = d3.select("tbody");

// use d3 to display initial data //
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
var button = d3.select("#filter-btn");
var clearbutton = d3.select("#clear-btn");

// select the form //
var form = d3.select("#form");

// create event handlers //
button.on("click", runEnter, false);
form.on("submit", runEnter, false);
clearbutton.on("click", runClear, false);

// complete the event handler function for the form //
function runEnter() {

    // prevent page from refreshing
    d3.event.preventDefault();

    // clear any prior data in table
    tbody.html("");

    // accept all values
    var datetime = d3.select("#datetime").property("value");
    //console.log(datetime);
    var city = d3.select("#city").property("value");
    //console.log(city);
    var state = d3.select("#state").property("value");
    //console.log(state);
    var shape = d3.select("#shape").property("value");
    //console.log(shape);


    // test for value
   if (datetime) {
        var filteredData = tableData.filter(data => data.datetime === datetime);
        //console.log(filteredData);
    } else if (city) {
        var filteredData = tableData.filter(data => data.city === city);
        //console.log(filteredData);
    } else if (state) {
        var filteredData = tableData.filter(data => data.state === state);
        //console.log(filteredData);       
    } else {
        var filteredData = tableData.filter(data => data.shape === shape);
        //console.log(filteredData);       
    }


    // render the filtered data in the table
    filteredData.forEach((displayData) => {
        var row = tbody.append("tr");
        Object.entries(displayData).forEach(([key, value]) => {
            //console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
};


var filterSearch = d3.selectAll(".form-control");

// clears input fields and table
function runClear() {
    filters = {};

    // resets every search filter
    filterSearch._groups[0].forEach(entry => {
        if (entry.value != 0) {
            d3.select("#" + entry.id).node().value = "";
        }
    // clears table    
    tbody.html("")
    });
};
