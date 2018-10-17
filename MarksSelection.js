'use strict';

// Wrap everything in an anonymous function to avoid polluting the global namespace
(function () {
  // Use the jQuery document ready signal to know when everything has been initialized
  $(document).ready(function () {
    // Tell Tableau we'd like to initialize our extension
    tableau.extensions.initializeAsync().then(function () {
      // Get the dashboard name from the tableau namespace and set it as our title
      populateDataTable();
      //showChooseSheetDialog();
    });
  });



  // Initialize some variables
  var data = 0
  var firstSelection = 0 
  var selectedValue = []

  function populateDataTable () {

    const dashboardName = tableau.extensions.dashboardContent.dashboard.name;
    const worksheet = tableau.extensions.dashboardContent.dashboard.worksheets[7];
    $('#choose_sheet_title').text(dashboardName);
    //Get the Data that you need
    worksheet.getSummaryDataAsync().then (function (sumdata) {
	const worksheetData = sumdata;
	const data = worksheetData.data.map(function (row, index) {
    const rowData = row.map(function (cell) {
          return cell.value;
      	});
        return rowData;
      	});
           populatelist(data);
      	});
   }


function populatelist(data) {
    var numberList = document.getElementById("ticker01");
         data.forEach(function(element) {



            var measureName = document.createElement("li");
            var measureNameNode = document.createTextNode(element[0]);
            measureName.classList.add("name1");
            measureName.appendChild(measureNameNode);
            numberList.appendChild(measureName);


            var measureValue1 = document.createElement("li");
            var measureValueNode = document.createTextNode(element[3]);
            measureValue1.classList.add("test2");
            measureValue1.appendChild(measureValueNode);
            numberList.appendChild(measureValue1);

            });

            $(function(){
                $("ul#ticker01").liScroll({travelocity: 0.1});
                    });
        }

  })();
    // Add your startup code here

