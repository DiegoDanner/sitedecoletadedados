function showTable() {
    // Get the name entered by the user
    var name = document.getElementById("name").value;
    
     // Get the age entered by the user
    var age = document.getElementById("age").value;
  
    // Create an empty table element
    var table = document.createElement("table");
  
    // Add a row to the table for the name
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Name:";
    cell2.innerHTML = name;
    
     // Add a row to the table for the age
    var row = table.insertRow();
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = "Age:";
    cell2.innerHTML = age;
    
      // Add the table to the page
    document.getElementById("tableContainer").appendChild(table);
  }