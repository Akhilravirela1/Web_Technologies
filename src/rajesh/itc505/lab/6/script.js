document.addEventListener('DOMContentLoaded', function () {
  const changeColorButton = document.getElementById('change-color-button');
  const container = document.querySelector('.container');

  changeColorButton.addEventListener('click', function () {
    // Generate a random color
    const randomColor = getRandomColor();
    
    // Change the background color of the container
    container.style.backgroundColor = randomColor;
  });

  function getRandomColor() {
    // Generate a random hexadecimal color code
    return '#' + Math.floor(Math.random()*16777215).toString(16);
  }
});
