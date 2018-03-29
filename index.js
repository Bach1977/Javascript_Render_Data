// Get references to the tbody element, input field and button
var $countryInput = document.querySelector("#country");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $tbody = document.querySelector("tbody");

// Add an event listener to the searchButton

$searchBtn.addEventListener("click", handleSearchButtonClick);

var alienData = dataSet;

// renderTable
function renderTable() {
    $tbody.innerHTML = "";
    for (var i = 0; i < alienData.length; i++) {
      // Data and Fields
      var data = alienData[i];
      var fields = Object.keys(data);
      // Create a new row in the tbody
      var $row = $tbody.insertRow(i);
      for (var j = 0; j < fields.length; j++) {
        
        var field = fields[j];
        var $cell = $row.insertCell(j);
        $cell.innerText = data[field];
      }
    }
  }

function handleSearchButtonClick() {
    
   
    var AlienDate = $dateInput.value.trim().toLowerCase();
    var AlienCity = $cityInput.value.trim().toLowerCase();
    var AlienState = $stateInput.value.trim().toLowerCase();
    var AlienCountry = $countryInput.value.trim().toLowerCase();
    var AlienShape = $shapeInput.value.trim().toLowerCase();
    

    // Set data to an array 
    alienData = dataSet.filter(function(data) {

        if(AlienDate && AlienDate != data['datetime']) {return false} 
        if(AlienCity && AlienCity != data['city']) {return false}         
        if(AlienState && AlienState != data['state']) {return false}         
        if(AlienCountry && AlienCountry != data['country']) {return false}         
        if(AlienShape && AlienShape != data['shape']) {return false}         
        return true
    });
    renderTable();
    }

// Render the table for the first time on page load
renderTable();


//Pagination
$(document).ready(function() {
    $('#alientable').dataTable( {
      "language": {
        "search": "Search comments:"
       }
    } );
  });
