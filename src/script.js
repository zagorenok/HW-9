const wrapper = document.querySelector('.wrapper');
const input = document.querySelector('input');
const list = document.querySelector('.list');
const errorText = document.querySelector('#error-text');
const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
});

wrapper.addEventListener('click', (event) => {
   let action = event.target.dataset.action; 
   let elem = event.target;

   switch (action) {
       case 'add-item':
           addItem();
           break;
       case 'remove-item':
           removeItem(elem);
           break;
       case 'change-toggle':
           changeToggle(elem);
           break;
   }
});

input.addEventListener('input', function(event) {  
    checkValue(event.target.value);
});

function checkValue(value) {
    let regExp = /^[a-zA-Z0-9]{2,25}$/g;     
    let check = regExp.test(value);
    
    if (!check && value) {
        input.classList.add('invalid');
        errorText.innerText = 'Error text, please check';
    } else {
        input.classList.remove('invalid');
        errorText.innerText = '';
        
    }
    return check;
}

function addItem() {
    if (checkValue(input.value)) {
        const li = document.createElement('li');
        li.dataset.action = 'change-toggle';
        li.innerHTML = `${input.value} <button data-action="remove-item">Remove item</button>`;
        list.append(li);
    }
    return false;
}

function removeItem(el) {
  el.closest('li').remove();
}

function changeToggle(el) {
    el.classList.toggle('done');
}


	