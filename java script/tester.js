const user = "Lucas";           // The constants
const password = "12345";

for (let tentativas = 3; tentativas > 0; tentativas--) {
    var sentry = prompt("Me dê seu usuário");
    var checker = prompt("Me dê sua senha");
    if (sentry == user && checker == password) {
      alert("Tudo Certo!");                                     
      break;                                                    //As long as password and user aren't correct, loops up to 3 times
    }                                                       
    else {
        alert("Usuário e/ou senha inválidos!")
    }
}

if (sentry != user || checker != password) {
    alert("Você foi bloqueado.");                                       //Only happens if all 3 tries are used
}