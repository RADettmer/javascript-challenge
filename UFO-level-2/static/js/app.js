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

// create event handlers //
button.on("click", runEnter);
form.on("submit", runEnter);

// complete the event handler function for the form //
function runEnter() {

    // prevent page from refreshing
    //d3.event.preventDefault();

    // clear any prior data in table
    tbody.html("");


    // test for empty value
    if (d3.select("#datetime") !=="") {
        var inputElement = d3.select("#datetime");
        var inputValue = inputElement.property("value");

        // filter data on input element
        var filteredData = tableData.filter(data => data.datetime === inputValue);
        //console.log(filteredData);
    } else if (d3.select("#city") !=="") {
        var inputElement = d3.select("#city");
        var inputValue = inputElement.property("value");
    
        // filter data on input element
        var filteredData = tableData.filter(data => data.city === inputValue);
        //console.log(filteredData);
    } else if (d3.select("#state") !=="") {
        var inputElement = d3.select("#state");
        var inputValue = inputElement.property("value");

        // filter data on input element
        var filteredData = tableData.filter(data => data.state === inputValue);
        //console.log(filteredData);       
    } else {
        var inputElement = d3.select("#shape");
        var inputValue = inputElement.property("value");
        
        // filter data on input element
        var filteredData = tableData.filter(data => data.shape === inputValue);
        //console.log(filteredData);       
    }

    //select input element and get the raw HTML code
    //var inputElement = d3.select("#datetime");

    // get the value property of the input element
    //var inputValue = inputElement.property("value");

    //console.log(inputValue);
    //console.log(tableData);
    
    // filter data on input element
    //var filteredData = tableData.filter(date => date.datetime === inputValue);
    //console.log(filteredData);

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

// create multiple search categories - add drop down

// date/time - "1/1/2010" - completed above
// city - "la mesa"
// state - "ca"
// country - "us"
// shape - "triangle"

