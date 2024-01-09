const body = document.body;
const circle = document.querySelector('.circle');

function toggleMode() {
  body.classList.toggle('dark-mode');
  circle.classList.toggle('move-right');
//   updateGreetingText();
}

// function updateGreetingText() {
//   const isDarkMode = body.classList.contains('dark-mode');
//   greetingText.textContent = isDarkMode ? 'Goodnight. Have a great sleep..!' : 'Good Morning. Have a nice day..!';
// }
