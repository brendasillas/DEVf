
//trabajar con un arreglo las cuentas
var cuentas = [
    { nombre: "BRENDA", saldo: 200, password: 'helloworld' },
    { nombre: "GERA", saldo: 290, password: 'l33t' },
    { nombre: "MARY", saldo: 67, password: '123' }
];
var indice = -1;//iniciar indice para controlar ingreso
// html principal
var htmlInicio = '<button class="botonsesion" onclick="Inicio()">Iniciar sesión</button> <button class="botonsesion" onclick="crearCuenta()">Crear cuenta</button>';
// Consultar/Ingresar/Retirar/Salir
var htmlMovimientos = '<p>Elija la operación a realizar:</p><button  class="cajeroMenu" onclick="consultarDisponible()">Consultar saldo</button> <button class="cajeroMenu" onclick="ingresar()">Deposito</button> <button class="cajeroMenu" onclick="retirar()">Retiro</button> <button class="cajeroMenu" onclick="salir()">Salir</button>';
// Resultado / Volver
var htmlRespuesta = '<p id="texto"></p><button class="botonsesion" onclick="operaciones()">Volver</button>';
//-------------------------------------------
function operaciones() {
    document.getElementById("principal").innerHTML = htmlMovimientos;
};
function Inicio() { 
    debugger
    var nUsuario;
    for (var i = 0; i < cuentas.length; i++)//inicializar indice para recorrer el objeto
     {
        if (i===0) {
            nUsuario=prompt("Ingrese su nombre de usuario:");
            nUsuario= nUsuario.toLocaleUpperCase();
        };
        //---------------------------------------------------------------
        if (nUsuario === null) {
            // Si esta vacio
            break;
        } else if (nUsuario === cuentas[i].nombre) {
            // Si existe el usuario
            
            var indiceCuenta = i;
            var contra;
            while (contra !== cuentas[indiceCuenta].password) {//buscar la contra
                contra = prompt('' + cuentas[indiceCuenta].nombre + ' ingrese su contraseña:');
                if (contra === null) {
                    indiceCuenta === -1;
                    break;
                } else if (contra === cuentas[indiceCuenta].password) {
                    operaciones();
                    // Sacar el valor de indice
                    indice = indiceCuenta;
                } else {
                    alert("La contraseña no es correcta. Intente nuevamente.");
                };
            };
            break;
        } else if (i === cuentas.length-1) {
            // Al haber revisado todo el array y no encontrar el usuario, reiniciar el loop y mostrar mensaje
            // El loop reinicia con i=-1 porque al volver "arriba", se le suma 1, quedando en 0 de nuevo
            alert("No se ha encontrado un usuario con este nombre. Intente nuevamente.");
            i=-1;
        };
    };
};
function crearCuenta() { 
    var existe = true;
    while (existe !== false) {
        var ccNombre = prompt("Ingrese el nombre de usuario nuevo:");
        if (ccNombre !== null) {
            // Verificar si existe la cuenta
            for (var i = 0; i < cuentas.length; i++) {
                if (ccNombre === cuentas[i].nombre) {
                    existe = true;
                    alert("Este usuario ya existe.");
                    break;
                } else {
                    existe = false;
                };
            };
            // Seguir solo si no existe
            if (existe === false) {
                var ccPassword = prompt("Ingrese una contraseña:");
                if (ccPassword !== null) {
                    var ccSaldo=NaN;
                    // sea un numero
                    while (isNaN(ccSaldo)===true) {
                        ccSaldo = prompt("Ingrese su saldo inicial:");
                        if (ccSaldo !== null) {
                            ccSaldo = Number(ccSaldo);
                            if (isNaN(ccSaldo)===true) {
                                alert("El valor ingresado no es numérico. Intente nuevamente.");
                            } else if (ccSaldo === null) {
                                break;
                                //regla de negocio
                            } else if (ccSaldo < 10) {
                                alert("El valor ingresado es menor que el monto mínimo. El monto mínimo que una cuenta debe tener en todo momento es de $10."); 
                                ccSaldo = NaN;  
                                //regla de negocio                             
                            } else if (ccSaldo > 990) {
                                alert("El valor ingresado es mayor que el monto máximo. El monto máximo que una cuenta puede tener es de $990");
                                ccSaldo = NaN;                              
                            } else {
                                cuentas.push({ nombre: ccNombre, saldo: ccSaldo, password: ccPassword });
                                alert('Se ha guardado tu cuenta. Tu nombre de usuario es "'+ccNombre+'". Tu contraseña es "'+ccPassword+'". Tu saldo inicial es de $'+ccSaldo+'.')
                            };
                        } else {
                            break;
                        };
                    };
                };
            };
        } else {
            break;
        };
    };
};
function consultarDisponible() {
    var mostrarsaldo = (cuentas[indice].nombre+" tu saldo es:"+cuentas[indice].saldo + "</b>.");
    document.getElementById("principal").innerHTML = htmlRespuesta
    document.getElementById("texto").innerHTML = mostrarsaldo;
};
function ingresar() {
    var saldoActual = cuentas[indice].saldo;
    while (saldoActual === cuentas[indice].saldo) {
        var strMonto = prompt("Monto a ingresar:");
        var monto = Number(strMonto);
        if (strMonto === null) {
            break;
        } else if ((isNaN(monto)===true)||(monto <= 0)) {
            alert("Por favor, ingrese un monto válido.");
        } else {//incrementar saldo
            var nuevoSaldo = monto + saldoActual
            if (nuevoSaldo>990) {
                alert("Su saldo actual es de $"+saldoActual+", al ingresar $"+monto+ " se superaría el máximo de $990. La operación no es permitida.");
            } else {
                var mensaje = ("El monto ingresado es de <b>$"+monto+"</b>. Su nuevo saldo es de <b>$"+nuevoSaldo+"</b>.");
                cuentas[indice].saldo =  nuevoSaldo;
                document.getElementById("principal").innerHTML = htmlRespuesta;
                document.getElementById("texto").innerHTML = mensaje
            };
        };
    };
};
function retirar() {
    var saldoActual = cuentas[indice].saldo;
    while (saldoActual === cuentas[indice].saldo) {
        var ingreso = prompt("Monto a ingresar:");
        var monto = Number(ingreso);
        if (ingreso === null) {
            break;
        } else if ((isNaN(monto)===true)||(monto <= 0)) {
            alert("Por favor, ingrese un monto válido.");
        } else {
            var nuevoSaldo = saldoActual - monto;
            if (nuevoSaldo<10) {
                alert("Su saldo actual es de $"+saldoActual+". Al retirar $"+monto+ " la cuenta tendría menos de  $10. La operación no es permitida.");
            } else {
                var textToShow = ("El monto retirado es de <b>$"+monto+"</b>. Su nuevo saldo es de <b>$"+nuevoSaldo+"</b>.");
                cuentas[indice].saldo =  nuevoSaldo;
                document.getElementById("principal").innerHTML = htmlRespuesta;
                document.getElementById("texto").innerHTML = textToShow;
            };
        };
    };
};
//cerrar sesion 
function salir() {
    indice = -1;
    //llamar el menu princ
    document.getElementById("principal").innerHTML = htmlInicio;
};


