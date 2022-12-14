
const usuario = $("#txtUsuario");
const msgValUsuario = $("#msgValUsuario");

const nombre = $("#txtNombre");
const msgValNombre = $("#msgValNombre");

const correo = $("#txtcorreo");
const msgValcorreo = $("#msgValCorreo");

const pwd = $("#txtPwd");
const msgValPwd = $("#msgValPwd");

const celular = $("#txtMovil");
const msgValMovil = $("#msgValMovil");

const enviar = $("#btnEnviar");

function Validar(){
    //console.log("function validar")
    let user = $("#txtUsuario").val();
    let expRegUser = new RegExp("^[a-zA-Z0-9_]{4,16}$");
    $("#msgValUsuario").text('');

    let nom = $("#txtNombre").val()
    let expRegNom = new RegExp("^[A-Zña-zñ ]*$");
    $("#msgValNombre").text('');

    let cont = $("#txtPwd").val()
    let expRegPwd = new RegExp("^[0-9]{8}$");
    $("#msgValPwd").text('');

    let email = $("#txtcorreo").val()
    let expRegEmail = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
    $("#msgValCorreo").text('');

    let celu = $("#txtMovil").val()
    let expRegCelu = new RegExp("^\([0-9]{2}\)[0-9]{3}-[0-9]{3}-[0-9]{3}$");
    $("#msgValMovil").text('');

    if(user == "" || !expRegUser.test(user)){
        $("#msgValUsuario").text('solo puede contener numeros, letras y guion bajo');
    }
    if(nom == "" || !expRegNom.test(nom)){ 
        $("#msgValNombre").text("nombre no valido");
    }
    if(cont == "" || !expRegPwd.test(cont)){ 
        $("#msgValPwd").text("debe contener 8 digitos");
    }
    
    if(email == "" || !expRegEmail.test(email)){
        $("#msgValCorreo").text("email no valido");
    }
    if(celu == "" || !expRegCelu.test(celu)){
        $("#msgValMovil").text("numero incorrecto");
    }
}
$("#btnEnviar").click(()=>{
    Validar();
});