document.getElementById('loginForm').addEventListener('submit', function(event){
    event.preventDefault(); //Evita el envío del formulario

    let username = event.target.username.value;
    let password = event.target.password.value;

    //Validar entrada (esto es solo un ejemplo básico)
    if (username === "usuario" && password == "contraseña"){
        alert('Inicio de sesión exitoso');
    } else{
        alert('Usuario o contraseña incorrectos');
    }

    //Aquí se puede agregar una lógica para animaciones adicionales si se desea
});