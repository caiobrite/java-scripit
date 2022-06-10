// método querySeletor
const btn = document.querySelector('.btn');
btn.style.background ='red';

// Método addEventListener
myForm.addEventListener('submit', onSubmit)

// Função onSubmit
function onSubmit(e) {
    e.preventDefault();
    // console.log(nameInput.value);
    if (nameInput.value === '' || emailInput.value === '') {
        // alert('Por favor, preencha os dados.');
        msg.classList.add('error');
        msg.innerHTML = 'Por favor, preencha os dados.';
        setTimeout(() => msg.remove(), 3000);
    } else {
        // console.log('sucess');
        const li = document.createElement('li');
        li.appendChild(
            document.createTextNode(
                `${nameInput.value} : ${emailInput.value} : ${horario.value}`
            )
        );
        userList.addEventListener(li);
        // Limpa o formulário
        nameInput.value = '';
        emailInput.value = '';
        horario.getElementsByTagName('option')[0].selected = 'selected';
        nameInput.focus(); //Coloca o foco no elemento
    }
}

// Validando e-mail
emailInput.addEventListener('change', (e) => {
    let padrao = new RegExp(/.*@*\..*/);
    if (!padrao.test(emailInput.value)) {
        // alert('Por favor, insira um email válido'.);
        msg_email.classList.add('error');
        msg_email.innerHTML = 'Por favor,insira um e-mail válido.';
        setTimeout(() => msg.remove(), 3000);
    }
});