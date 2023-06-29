const ingresos = [
    new Ingreso('Salario', 2000),
    new Ingreso('Venta auto', 5000)
];

const egresos = [
    new Egreso('Renta', 4000),
    new Egreso('Ropa', 800)
];

let totalIngresos = 0;
for (let ingreso of ingresos) {
    totalIngresos += ingreso.valor;
}

let totalEgresos = 0;
for (let egreso of egresos) {
    totalEgresos += egreso.valor;
}

let porcentajeEgreso = totalIngresos / (totalEgresos + totalIngresos);

console.log(totalIngresos);
console.log(totalEgresos);
console.log(porcentajeEgreso);

/* var egresos = [{
    concepto: "Renta",
    importe: 900
}, {
    concepto: "Ropa",
    importe: 400
}];

var ingresos = [{
    concepto: "Quincena",
    importe: 9000
}, {
    concepto: "Venta",
    importe: 400
}];

*/

function cargarApp() {
    cargarCabecero();
}

function cargarCabecero() {
    const presupuesto = totalIngresos - totalEgresos;
    const porcentajeEgreso = totalEgresos / (totalIngresos + totalEgresos);
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos);
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos);

    // console.log(presupuesto);
    // console.log(porcentajeEgreso);
    // console.log(totalIngresos());
    // console.log(totalEgresos());
};

/*
const totalIngresos = (ingresos) => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso;
    }
    return totalIngreso;
};

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso;
    }
    return totalEgreso;
};
 */
const formatoMoneda = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
};

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('es-MX', { style: 'percent', minimumFractionDigits: 2 });
};

// e función:
// • Nómbrala cargarIngresos.
// • Debe ser una función tipo flecha.
// • Declara la variable vacía ingresosHTML.
// • Recorre el arreglo ingresos con un ciclo for of.
// • En el cuerpo del ciclo, concatena el resultado de una función llamada
// crearIngresoHTML y pásale como parámetro cada uno de los elementos del arreglo
// ingreso.
// • Una vez que termine el ciclo, recupera el elemento lista-ingresos a través de su id o
// asígnale el contenido de la variable ingresosHTML
const cargarIngresos = () =>   {
    let ingresosHTML=[];
    for (ingreso of ingresos) {
        ingresosHTML = ingresosHTML + crearIngresoHTML(ingreso);
    }
    document.getElementById("lista-ingresos")= ingresosHTML;

};

const crearIngresoHTML = (ingreso) => {
    let ingresoHTML;

}