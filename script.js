document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const keys = document.querySelectorAll('.keys button');
    
    keys.forEach(key => {
      key.addEventListener('click', () => {
        if (key.textContent === '=') {
          display.value = eval(display.value);
        } else if (key.textContent === 'C') {
          display.value = '';
        } else {
          display.value += key.textContent;
        }
      });
    });
  });
  