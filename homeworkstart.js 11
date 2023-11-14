window.onload = function() {
    let  decreaseButtons = document.querySelectorAll('.decrease');
    let  increaseButtons = document.querySelectorAll('.increase');
    let  countElements = document.querySelectorAll('.count');

    count = 1;
    decreaseButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (count > 1) {
          count--;
          countElements[index].textContent = count;
          updateTotalPrice();
        }
      });
    });
  
    increaseButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        if (count < 100) {
          count++;
          countElements[index].textContent = count;
          updateTotalPrice();
        }
      });
    });


    
    let prece = document.querySelectorAll('.price')
    let totalPriceElement = document.getElementById ('#totalPrice')
    let OrderBtn = document.querySelector ('.btn')
    const sizeRadios = document.querySelectorAll('input[name="sizeRadioOptions"]');
    
    let totalPrice = 0;
    
  }
 
