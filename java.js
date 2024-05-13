function iniciarSesion() {
    var email = document.getElementById("emailLogin").value;
    var contraseña = document.getElementById("contraseñaLogin").value;

    // Obtener las cuentas del almacenamiento local
    var cuentasGuardadas = JSON.parse(localStorage.getItem("cuentas")) || {};

    // Verificar si existe una cuenta con el email proporcionado
    if (cuentasGuardadas[email]) {
        var usuario = cuentasGuardadas[email];
        if (usuario.contraseña === contraseña) {
            alert("¡Inicio de sesión exitoso!");
            // Aquí puedes redirigir al usuario a otra página después de iniciar sesión
        } else {
            alert("Correo electrónico o contraseña incorrectos.");
        }
    } else {
        alert("No hay una cuenta registrada con ese correo electrónico.");
    }
}
