// Створити кнопку яке викликає модальне вікно, зробити копію компонента бутстрап
window.onload = function() {
  let modalWindow = document.querySelector('.modal');
  let overlayBlock = document.querySelector('.overlay');

  let buttons = document.querySelectorAll('.open, .close');
  buttons.forEach(button => {
    button.addEventListener('click', function() {
      overlayBlock.classList.toggle('open');
      modalWindow.classList.toggle('open');
    });
  });
}
