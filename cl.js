let display = document.getElementById('display');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        let value = e.target.getAttribute('data-value');
        
        switch(value) {
            case 'C':
                display.value = '';
                break;
            case '+/-':
                display.value = display.value ? parseFloat(display.value) * -1 : '';
                break;
            case '%':
                display.value = display.value ? parseFloat(display.value) / 100 : '';
                break;
            case '=':
                try {
                    display.value = eval(display.value);
                } catch {
                    display.value = 'Error';
                }
                break;
            default:
                display.value += value;
        }
    });
});
