window.onload = function() {
  let decreaseButtons = document.querySelectorAll('.decrease');
  let increaseButtons = document.querySelectorAll('.increase');
  let countElements = document.querySelectorAll('.count');
  let totalPriceElement = document.getElementById('totalPrice');
  let container = document.querySelector('.container');
  let orderBtn = document.querySelector('.btn');
  let orderForm = document.querySelector('#orderForm');


  let menu = [
      {
          pizzaName: 'Херсонская',
          price: 215,
          sizeS: 215,
          sizeM: 235,
          sizeXL: 255,
          order: 0,
          orderSize: ''
      },
      {
          pizzaName: 'Dimare',
          price: 290,
          sizeS: 290,
          sizeM: 310,
          sizeXL: 340,
          order: 0,
          orderSize: ''
      },
      {
          pizzaName: 'JoeBlack',
          price: 212,
          sizeS: 212,
          sizeM: 332,
          sizeXL: 352,
          order: 0,
          orderSize: ''
      },
      {
          pizzaName: 'Горгонзола',
          price: 219,
          sizeS: 219,
          sizeM: 239,
          sizeXL: 259,
          order: 0,
          orderSize: ''
      },
      {
          pizzaName: 'Лесная',
          price: 199,
          sizeS: 199,
          sizeM: 219,
          sizeXL: 239,
          order: 0,
          orderSize: ''
      },
      {
          pizzaName: 'Бьянко',
          price: 206,
          sizeS: 206,
          sizeM: 326,
          sizeXL: 346,
          order: 0,
          orderSize: ''
      },
      {
          pizzaName: 'Венецианская',
          price: 210,
          sizeS: 210,
          sizeM: 330,
          sizeXL: 350,
          order: 0,
          orderSize: ''
      },
      {
          pizzaName: 'Верона',
          price: 201,
          sizeS: 201,
          sizeM: 321,
          sizeXL: 341,
          order: 0,
          orderSize: ''
      },
  ];

  container.addEventListener('change', function () {
    updateTotalPrice();
  });

  function updateTotalPrice() {
    let totalPrice = 0;
    const orderSize = document.querySelector('input[name="inlineRadioOptions"]:checked');
    if (orderSize) {
      const sizeValue = orderSize.value;
      menu.forEach(item => {
        totalPrice += item.order * item[sizeValue];
      });
    }
    totalPriceElement.textContent = `Вартість замовлення: ${totalPrice} грн`;
  }

  decreaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (menu[index].order > 0) {
        menu[index].order--;
        countElements[index].textContent = menu[index].order;
        updateTotalPrice();
      }
    });
  });

  increaseButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      if (menu[index].order < 100) {
        menu[index].order++;
        countElements[index].textContent = menu[index].order;
        updateTotalPrice();
      }
    });
  });

  orderBtn.addEventListener('click', function(e){
    e.preventDefault();
    container.classList.add('d-none');
    orderForm.classList.remove('d-none');
});
 
  function validForm(){
    let nameValue = document.querySelector('#name').value; 
    let emailValue = document.querySelector('#email').value; 
    let phoneValue = document.querySelector('#phone').value; 
    let btnOrder = document.querySelector('.btn-order'); 
    let phoneRegex = /^\d{11}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    console.log(phoneRegex.test(phoneValue));
    console.log(emailRegex.test(emailValue));

    if(nameValue !== "" && emailRegex.test(emailValue) && phoneRegex.test(phoneValue)){
      btnOrder.removeAttribute('disabled');
    }
    else{
      btnOrder.setAttribute('disabled', 'disabled');
    }
  }

  orderForm.addEventListener('keydown', function(){
    validForm();
  })
 
};
