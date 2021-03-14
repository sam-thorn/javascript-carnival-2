  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

console.log("Whack-a-Mole!")

function cellRefArray() {  
  let refArray = [];
  // create a nested for loop to create a reference to each row and cell in the HTML table.
  // cells exist within rows in the table.
  for (i = 0; i < document.getElementById("table-1").rows[0].cells.length; i++) {
    for (j = 0; j < document.getElementById("table-1").rows[0].cells.length; j++) {
      let refCells = document.getElementById("table-1").rows[i].cells[j];
      // Array push needs to be within the code block of the loop, as this is where the variable 'refCells' has been declared. 
      // Consider the scope of your code.
      refArray.push(refCells);
      console.log(refArray); 
    }
  }
}
cellRefArray();

function getRandomCell() {
  
}
//getRandomCell();
  


