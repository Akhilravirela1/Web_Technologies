document.addEventListener('DOMContentLoaded', function () {
  const increaseCounterButton = document.getElementById('increase-counter-button');
  const counterValue = document.getElementById('counter-value');

  let count = 0;

  increaseCounterButton.addEventListener('click', function () {
    count++;
    counterValue.textContent = `Count: ${count}`;
  });
});
