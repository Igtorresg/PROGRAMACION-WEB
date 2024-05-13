function registrarCuenta() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var contraseña = document.getElementById("contraseña").value;

    // Aquí puedes agregar validaciones adicionales si es necesario

    // Obtener las cuentas existentes del almacenamiento local
    var cuentasGuardadas = JSON.parse(localStorage.getItem("cuentas")) || {};

    // Verificar si ya existe una cuenta con el mismo email
    if (cuentasGuardadas[email]) {
        alert("Ya existe una cuenta registrada con este correo electrónico.");
        return false;
    }

    // Guardar los datos en el almacenamiento local bajo una clave única (email)
    var nuevaCuenta = {
        nombre: nombre,
        email: email,
        contraseña: contraseña
    };
    cuentasGuardadas[email] = nuevaCuenta;
    localStorage.setItem("cuentas", JSON.stringify(cuentasGuardadas));

    alert("¡Registro exitoso!");
    document.getElementById("registroForm").reset(); // Limpiar el formulario

    return false; // Evitar el envío del formulario
}
