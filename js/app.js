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

console.log(totalIngresos); 
console.log(totalEgresos); 

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


function cargarCabecero() {
    const presupuesto = totalIngresos() - totalEgresos();
    const porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById("presupuesto").innerHTML=formatoMoneda(presupuesto);
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









