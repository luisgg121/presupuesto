const ingresos = [
    new Ingreso("Salario", 2000),
    new Ingreso('Venta auto', 5000)
];

console.log(ingresos[0].descripcion);
console.log(ingresos[1].descripcion);

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

let porcentajeEgreso = totalEgresos / totalIngresos;

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

const cargarIngresos = () => {
    let ingresosHTML = "";
    for (const ingreso of ingresos) {
        const ingresoHTML = crearIngresoHTML(ingreso);
        ingresosHTML += ingresoHTML;
    }
    document.getElementById('lista-ingresos').innerHTML = ingresosHTML;
    
};

const cargarEgresos = () => {
    let egresosHTML = "";
    for (const egreso of egresos) {
        const egresoHTML = crearEgresoHTML(egreso);
        egresosHTML += egresoHTML;
    }
    console.log(egresosHTML);
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
};

// En lugar de escribir una cadena en el div elemento-descripcion, toma el
// contenido de ingreso.descripcion
// const crearIngresoHTML = (ingreso) => {
//     let ingresoHTML=document.getElementById("lista-ingresos").innerHTML();

//     document.getElementsByClassName("elemento-descripcion");

//     return ingresoHTML;
// }

// let ingresoHTML = `
//   <div>
//     <div>${ingreso.descripcion}</div>
//     <div>${formatoMoneda(ingreso.valor)}</div>
//     <ion-icon name="close-circle-outline" onclick="eliminarIngreso(${ingreso.id})"></ion-icon>
//   </div>
// `;

const crearIngresoHTML = (ingreso) => {
    console.log(ingreso.descripcion + " " + ingreso.valor);
    let ingresoHTML = `
      <div class="elemento limpiarEstilos">
        <div class="elemento-descripcion">${ingreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
          <div class="elemento-valor">+ ${formatoMoneda(ingreso.valor)}</div>
          <div class="elemento-eliminar">
            <button class="elemento-eliminar--btn">
             <ion-button>
              <ion-icon name="close-circle-outline"
              onclick='eliminarIngreso(${ingreso.id})'></ion-icon>
              </ion-button>
             </button>
          </div>
        </div>
      </div>
    `;
    console.log(ingresoHTML);
    return ingresoHTML;
};

const crearEgresoHTML = (egreso) => {
    console.log(egreso.descripcion + " " + egreso.valor);
    let egresoHTML = `
      <div class="elemento limpiarEstilos">
        <div class="elemento-descripcion">${egreso.descripcion}</div>
        <div class="derecha limpiarEstilos">
          <div class="elemento-valor">- ${formatoMoneda(egreso.valor)}</div>
          <div class="elemento_porcentaje">${formatoPorcentaje(porcentajeEgreso)}</div>
          <div class="elemento-eliminar">
            <button class="elemento-eliminar--btn">
             <ion-button>
              <ion-icon name="close-circle-outline"
              onclick='eliminarEgreso(${egreso.id})'></ion-icon>
              </ion-button>
             </button>
          </div>
        </div>
      </div>
    `;
    console.log(egresoHTML);
    return egresoHTML;
};

cargarIngresos();

cargarEgresos();
