let cuentas = [
  { nombre: "Mali", saldo: 200, password: "123123" },
  { nombre: "Gera", saldo: 290, password: "123123" },
  { nombre: "Maui", saldo: 67, password: "123123" },
];
let indice = -1;

let storage;

// PANTALLAS
const pantallaInicio = document.getElementById("inicio");
const pantallaOperaciones = document.getElementById("operaciones");
const pantallaLogin = document.getElementById("login");
const pantallaRegistrar = document.getElementById("registrar");
const pantallaConsultar = document.getElementById("consultar");
const pantallaIngresar = document.getElementById("ingresar");
const pantallaRetirar = document.getElementById("retirar");

// BOTONES
const btnLogin = document.getElementById("login_btn");
const btnIniciarSesion = document.getElementById("btn_iniciarsesion");
const btnCrearCuenta = document.getElementById("btn_crearcuenta");
const btncCancelar = document.getElementById("btn_ccancelar");
const btnlCancelar = document.getElementById("btn_lcancelar");
const btniCancelar = document.getElementById("btn_icancelar");
const btnCerrar = document.getElementById("cerrar_btn");
const btnIngresar = document.getElementById("ingresar_btn");
const btnIngresar2 = document.getElementById("btn_ingresar");
// Botones Retirar
const btnRetirar = document.getElementById("retirar_btn");
const btnRetirar2 = document.getElementById("btn_retirar");
const btnRCancelar = document.getElementById("btn_rcancelar");

// Botones Consultar
const btnCRegresar = document.getElementById("btn_cregresar");
const btnConsultar = document.getElementById("consultar_btn");

// ELEMENTOS
let bienvenida = document.getElementById("bienvenida");
let text_ingresar = document.getElementById("saldo_actual");
let text_retirar = document.getElementById("saldo_retirar");

window.onload = cargarPantalla();

function cargarPantalla() {
  let isLogin = localStorage.getItem("isLogin");
  if (isLogin === "true") {
    pantallaOperaciones.classList.remove("hide");
    pantallaInicio.classList.add("hide");
  } else {
    pantallaInicio.classList.remove("hide");
  }

  guardarArray();
  cargarDatos();
}

function cargarDatos() {
  bienvenida.innerHTML = `Bienvenido(a) ${localStorage.getItem("nombre")}`;
  text_ingresar.innerHTML = `Saldo actual: ${localStorage.getItem("saldo")}`;
  text_retirar.innerHTML = `Saldo actual: ${localStorage.getItem("saldo")}`;
  text_consultar.innerHTML = `Saldo actual: ${localStorage.getItem("saldo")}`;
}

// Carga de Pantallas
function cargarPantallaLogin() {
  pantallaInicio.classList.add("hide");
  pantallaLogin.classList.remove("hide");
}

function cargarPantallaCrear() {
  pantallaRegistrar.classList.remove("hide");
  pantallaInicio.classList.add("hide");
}

function cargarPantallaIngresar() {
  pantallaOperaciones.classList.add("hide");
  pantallaIngresar.classList.remove("hide");
}

function cargarPantallaRetirar() {
  pantallaOperaciones.classList.add("hide");
  pantallaRetirar.classList.remove("hide");
}

function cargarPantallaConsultar() {
  pantallaOperaciones.classList.add("hide");
  pantallaConsultar.classList.remove("hide");
}

// Funciones
function guardarArray() {
  if (localStorage.getItem("cuentas") === null) {
    localStorage.setItem("cuentas", JSON.stringify(cuentas));
  }
  storage = JSON.parse(localStorage.getItem("cuentas"));
}

function login() {
  let lUsuario = document.getElementById("luser_input").value;
  let lContraseña = document.getElementById("lpassword_input").value;
  let formulario = document.getElementById("login_form");

  for (let i = 0; i < storage.length; i++) {
    if (lUsuario == "") {
      alert("Ingrese su suario");
      break;
    } else if (lUsuario == storage[i].nombre) {
      let indiceCuenta = i;

      if (lContraseña == "") {
        alert("Ingrese su contraseña");
        indiceCuenta == -1;
        break;
      } else if (lContraseña === storage[i].password) {
        localStorage.setItem("nombre", storage[i].nombre);
        localStorage.setItem("contraseña", storage[indiceCuenta].password);
        localStorage.setItem("isLogin", "true");
        localStorage.setItem("saldo", storage[indiceCuenta].saldo);
        cargarDatos();
        pantallaLogin.classList.add("hide");
        pantallaOperaciones.classList.remove("hide");
        formulario.reset();
        indice = indiceCuenta;
      } else {
        alert("La contraseña no es correcta. Intente nuevamente.");
      }

      break;
    } else if (i === storage.length - 1) {
      alert(
        "No se ha encontrado un usuario con este nombre. Intente nuevamente."
      );
      i = -1;
      formulario.reset();
      break;
    }
  }
}

function crearCuenta() {
  let cUsuario = document.getElementById("cuser_input").value;
  let cContraseña = document.getElementById("cpassword_input").value;
  let saldo = document.getElementById("saldo_input").value;
  let formulario = document.getElementById("register_form");
  let existe = true;

  if (cUsuario === "") {
    alert("Ingrese un nombre de usuario por favor.");
  } else {
    for (let i = 0; i < storage.length; i++) {
      if (cUsuario === storage[i].nombre) {
        existe = true;
        alert("Este usuario ya existe.");
        break;
      } else {
        existe = false;
      }
    }
  }

  if (existe === false) {
    if (cContraseña === "") {
      alert("Por favor ingrese una contraseña");
    } else {
      saldo = Number(saldo);
      if (saldo === null) {
        alert("Por favor ingrese su saldo");
      } else if (isNaN(saldo)) {
        alert("Por favor ingrese una cantida numerica.");
      } else if (saldo < 10) {
        alert(
          "El valor ingresado es menor que el monto mínimo. El monto mínimo que una cuenta debe tener en todo momento es de $10."
        );
      } else if (saldo > 990) {
        alert(
          "El valor ingresado es mayor que el monto máximo. El monto máximo que una cuenta puede tener es de $990"
        );
      } else {
        storage.push({
          nombre: cUsuario,
          saldo: saldo,
          password: cContraseña,
        });
        localStorage.setItem("cuentas", JSON.stringify(storage));
        alert("Cuenta creada exitosamente.");
        formulario.reset();
        pantallaRegistrar.classList.add("hide");
        pantallaInicio.classList.remove("hide");
      }
    }
  }
}

function ingresar() {
  let saldo = parseInt(document.getElementById("monto_input").value);
  let saldoActual = parseInt(localStorage.getItem("saldo"));
  let formulario = document.getElementById("ingresar_form");
  cargarDatos();
  if (saldo === null) {
    alert("Ingrese la cantidad.");
  } else if (isNaN(saldo)) {
    alert("Por favor ingrese un monto valido.");
  } else {
    let montoNuevo = saldoActual + saldo;
    if (montoNuevo > 990) {
      alert(
        "Su saldo actual es de $" +
          saldoActual +
          ", al ingresar $" +
          saldo +
          " se superaría el máximo de $990. La operación no es permitida."
      );
    } else {
      localStorage.setItem("saldo", montoNuevo);
      for (let i = 0; i < storage.length; i++) {
        if (localStorage.getItem("nombre") == storage[i].nombre) {
          storage[i].saldo = montoNuevo;
          localStorage.setItem("cuentas", JSON.stringify(storage));
        }
      }

      formulario.reset();
      alert("Su nuevo saldo es de: " + montoNuevo);
      cargarDatos();
    }
  }
}

function retirar() {
  let saldo = parseInt(document.getElementById("rmonto_input").value);
  let saldoActual = parseInt(localStorage.getItem("saldo"));
  let formulario = document.getElementById("retirar_form");
  if (saldo === null) {
    alert("Ingrese la cantidad.");
  } else if (isNaN(saldo)) {
    alert("Por favor ingrese un monto valido.");
  } else {
    let montoNuevo = saldoActual - saldo;
    if (montoNuevo < 10) {
      alert(
        "Su saldo actual es de $" +
          saldoActual +
          ", al ingresar $" +
          saldo +
          " se superaría el máximo de $990. La operación no es permitida."
      );
    } else {
      localStorage.setItem("saldo", montoNuevo);
      for (let i = 0; i < storage.length; i++) {
        if (localStorage.getItem("nombre") == storage[i].nombre) {
          storage[i].saldo = montoNuevo;
          localStorage.setItem("cuentas", JSON.stringify(storage));
        }
      }

      formulario.reset();
      alert("Monto retirado exitosamente");
      cargarDatos();
    }
  }
}

function salir() {
  pantallaOperaciones.classList.add("hide");
  pantallaInicio.classList.remove("hide");
  indice = -1;
  localStorage.removeItem("isLogin");
  localStorage.removeItem("nombre");
  localStorage.removeItem("contraseña");
  localStorage.removeItem("saldo");
}

// Events
btnLogin.addEventListener("click", cargarPantallaLogin);

btnlCancelar.addEventListener("click", function () {
  if (pantallaInicio.classList.contains("hide")) {
    pantallaLogin.classList.add("hide");
    pantallaInicio.classList.remove("hide");
  }
});

btncCancelar.addEventListener("click", function () {
  if (pantallaInicio.classList.contains("hide")) {
    pantallaRegistrar.classList.add("hide");
    pantallaInicio.classList.remove("hide");
  }
});

btnIniciarSesion.addEventListener("click", login);

btnCerrar.addEventListener("click", salir);

btnCrearCuenta.addEventListener("click", crearCuenta);

btnIngresar.addEventListener("click", cargarPantallaIngresar);

btniCancelar.addEventListener("click", function () {
  pantallaOperaciones.classList.remove("hide");
  pantallaIngresar.classList.add("hide");
});

btnIngresar2.addEventListener("click", ingresar);

btnRetirar.addEventListener("click", cargarPantallaRetirar);
btn_retirar.addEventListener("click", retirar);
btnRCancelar.addEventListener("click", function () {
  pantallaOperaciones.classList.remove("hide");
  pantallaRetirar.classList.add("hide");
});

btnConsultar.addEventListener("click", cargarPantallaConsultar);
btnCRegresar.addEventListener("click", function () {
  pantallaOperaciones.classList.remove("hide");
  pantallaConsultar.classList.add("hide");
});
