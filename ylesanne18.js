//Kristo Tammeleht
//6.12.2023
//ylesanne 18

const formElement = document.getElementById('myForm');
 
const pattern = {
    firstName: /^[a-z]{2,}$/,
    lastName: /^[a-z]{2,}$/,
    email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
};
 
for (let field in pattern) {
    formElement[field].addEventListener('keyup', e => {
        e.preventDefault();
 
        let fieldValue = e.target.value;
        let kontroll = pattern[field].test(fieldValue);
        let helpText = document.getElementById(field + 'Val');
 
        if (kontroll) {
            helpText.classList.remove('text-danger');
            helpText.classList.add('text-muted');
        } else {
            helpText.classList.remove('text-muted');
            helpText.classList.add('text-danger');
        }
    });
}
 