window.onload = function(){
        let inputEl = document.querySelector('#inputWrite');
        let addButton = document.querySelector('#addItem');
        let reverseButton = document.querySelector('#reverseList');
        let contentContainer = document.querySelector('#content');

        function createElement(value){
            let getDate = new Date();
            let formateDate = getDate.toDateString();
            let item = document.createElement('div');
            item.classList.add('d-flex','justify-content-between','align-items-center','p-1','mb-3','border','rounded');
            item.innerHTML = `<div>
                <span>
                  ${value}
                </span>
                <span class = 'text-secondary'>
                   ${formateDate}
                </span>
            </div>
            <div>
                <button type="button" class="btn btn-danger">Remove Item</button>
            </div>`
            contentContainer.appendChild(item);
            let removeButton = item.querySelector('.btn-danger')
            removeButton.addEventListener('click', function(){
                item.remove();
            });
        }

        addButton.addEventListener('click', function(e){
            let inputValue= inputEl.value.trim();
            if(inputValue.length>2){
                createElement(inputEl.value);
                inputEl.value = '';
            }
            else{
                alert('Text must be more than one letter');
            }
            e.preventDefault();
        });
    
        function reverseList(){
            let [...itemList] = contentContainer.children;
            itemList.reverse();
            contentContainer.innerHTML = '';
            itemList.forEach(function(item){
                contentContainer.appendChild(item);
            });
        }
        reverseButton.addEventListener('click', function(e){
            reverseList();
            e.preventDefault();
        });
    }
