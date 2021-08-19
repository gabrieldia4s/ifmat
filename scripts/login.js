function validacao() {
    if(document.form.username.value==""){
        alert("por favor, preencha o campo nome");
        document.form.username.focus();
        return false;
    } /* dentro desta função, está sendo verificado se o usuário preencheu o campo "nome de usuário", se não
        houver preenchimento do mesmo, o código emite uma alerta avisando para o usuário preencher o determinado 
        campo, ainda assim caso não obtenha resposta dentro dos padrões predefinidos, o código não permitirá o envio
         dos dados. */

    if (document.form.password.value.length<8){
        alert("a senha deve conter no mínimo 8 digitos");
        document.form.password.focus();
        return false;
    } /* dentro desta função, está sendo verificado se o usuário preencheu o campo "senha" de acordo com a exigência pré
      estabelecida de no mínio 8 dígitos, se não houver preenchimento do mesmo, o código emite uma alerta avisando para o 
      usuário preencher o determinado campo, seguindo as orientações.*/
}