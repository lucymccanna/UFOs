// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");


function buildTable(data) {
    // clear any existing data
    tbody.html("");
  
    // Loop through each obj in the data and ppend a row and cells for each value in the row
    data.forEach((dataRow) => {

      // Append a row to the table body
      let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add each value as a table cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }

function handleClick() {

    //grab the datetime value from the filter
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    //check if a date was entered and filter the data using that date
    if (date) {

        //apply filter to the table data to only keep rows where the datetime value matches the filter value
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // if no date entered, the filteredData will be original tableData
     buildTable(filteredData);
};

// tell D3 to listen for a 'click' of the filter-btn button
d3.selectAll("#filter-btn").on("click", handleClick);

// build the final table when the page loads
buildTable(tableData);

