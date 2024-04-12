document.addEventListener("DOMContentLoaded", function () {
    const currentColorElement = document.getElementById("current-color");
    const paletteColors = document.querySelectorAll(".color");
    const canvas = document.getElementById("canvas");
  
    let currentColor = "white"; // Initial current color
  
    // Function to change current color
    function changeCurrentColor(color) {
      currentColor = color;
      currentColorElement.style.background = color;
    }
  
    // Function to change cell color
    function changeCellColor(cell) {
      cell.style.background = currentColor;
    }
  
    // Event listener for palette colors
    paletteColors.forEach((color) => {
      color.addEventListener("click", function () {
        changeCurrentColor(color.style.background);
      });
    });
  
    // Create cells for the canvas
    for (let i = 0; i < 100; i++) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      cell.addEventListener("click", function () {
        changeCellColor(cell);
      });
      canvas.appendChild(cell);
    }
  });
  