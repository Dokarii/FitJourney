function guardarDatos() {
    const usuarios = [
        {email: "juan1@gmail.com", password: "12345678"},
        {email: "pablo2@gmail.com", password: "12345678"},
        {email: "pedro3@gmail.com", password: "12345678"},
        {email: "sofia4@gmail.com", password: "12345678"},
    ];

    usuarios.forEach((usuario, index) => {
        localStorage.setItem(`usuario${index + 1}`, JSON.stringify(usuario));
        console.log(`Se guardó usuario${index + 1}`);
    });
}

function mostrarDatos() {
    for (let i = 1; i <= 4; i++) {
        const usuario = JSON.parse(localStorage.getItem(`usuario${i}`));
        console.log(usuario);
    }
}

guardarDatos();
mostrarDatos();

document.addEventListener("DOMContentLoaded", () => {
    const btnLogin = document.getElementById("btn-login");

    btnLogin.addEventListener("click", () => {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) {
            alert("Por favor, completa todos los campos.");
            return;
        }

        iniciarSesion(email, password, (error, mensaje) => {
            if (error) {
                alert(error);
            } else {
                alert(mensaje);
                window.location.href = "./Index.html";
            }
        });
    });
});

function iniciarSesion(email, password, callback) {
    console.log("Procesando inicio de sesión...");

    setTimeout(() => {
        const usuarios = [
            { email: "juan1@gmail.com", password: "12345678" },
            { email: "pablo2@gmail.com", password: "12345678" },
            { email: "pedro3@gmail.com", password: "12345678" },
            { email: "sofia4@gmail.com", password: "12345678" },
        ];

        const usuarioEncontrado = usuarios.find(
            (usuario) => usuario.email === email && usuario.password === password
        );

        if (usuarioEncontrado) {
            callback(null, "Inicio de sesión exitoso");
        } else {
            callback("Credenciales incorrectas", null);
        }
    }, 2000);
}



/*
// Función para leer datos de LocalStorage
function leerDato(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
}

// Función para eliminar datos de LocalStorage
function eliminarDato(key) {
    localStorage.removeItem(key);
    console.log(`Dato eliminado con la clave: ${key}`);
}

// Función para limpiar todo el LocalStorage
function limpiarDato() {
    localStorage.clear();
    console.log("LocalStorage limpiado");
}

guardarDato('Usuario', {nombre: 'Juan', edad: 20});
const Usuario0 = leerDato('Usuario0');
console.log(Usuario0);

guardarDato('Usuario', {nombre: 'Pedro', edad: 19});
const Usuario1 = leerDato('Usuario1');
console.log(Usuario1);

guardarDato('Usuario', {nombre: 'Pepe', edad: 23})
const Usuario2 = leerDato('Usuario2');
console.log(Usuario2)

eliminarDato(Usuario0);
limpiarDato();

/*
// Uso
guardarEnLocalStorage('usuario', { nombre: 'Juan', edad: 30 });
const usuario = leerDeLocalStorage('usuario');
console.log(usuario); // { nombre: 'Juan', edad: 30 }

eliminarDeLocalStorage('usuario');
limpiarLocalStorage();
*/