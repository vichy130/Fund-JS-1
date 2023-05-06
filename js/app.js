const ingresos = [new Ingreso("salario", 20000), new Ingreso("Venta auto", 50000)]
const egresos = [new Egreso("Renta", 4000), new Egreso("Ropa", 800)];
/*console.log(ingresos[1]._valor);*/

var cargarCabecero = () => {
    var presupuesto = totalIngresos() - totalEgresos();
    var porcentajeEgreso = totalEgresos() / totalIngresos();
    document.getElementById('presupuesto').innerHTML = formatoMoneda(presupuesto);
    document.getElementById('porcentaje').innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById('ingresos').innerHTML = formatoMoneda(totalIngresos());
    document.getElementById('egresos').innerHTML = formatoMoneda(totalEgresos());
}
var totalIngresos = () => {
    let totalIngreso = 0;
    const ingreso = ingresos.map(i => i._valor);
    for (let e of ingreso) { totalIngreso += e; }
    return totalIngreso;
}
var totalEgresos = () => {
    let totalEgreso = 0;
    /*let egresos=[];*/
    const egreso = egresos.map(i => i._valor);
    for (let e of egreso) { totalEgreso += e; };
    return totalEgreso;
}
var formatoMoneda = (valor) => {
    /*valor=valor.toFixed(2)*/
    valor = valor.toLocaleString("es-MX", { style: 'currency', currency: 'MXN', minimumFractionDigits: 2 });
    return valor;
}

var formatoPorcentaje = (valor) => {
    valor = valor.toLocaleString("es-MX", { style: 'percent', percent: '%', minimumFractionDigits: 2 });
    return valor;
}

function cargarApp() {
    cargarCabecero();
    cargarIngresos();
    cargarEgresos();
}

var cargarIngresos = () => {
    let ingresosHTML='';
    for(let ingreso of ingresos){
        ingresosHTML+=crearIngresoHTML(ingreso);
        console.log(ingreso);
    }
    console.log(ingresosHTML);
    document.getElementById('lista-ingresos').innerHTML=ingresosHTML;
}

var crearIngresoHTML = (ingreso) => {
    let egresoHTML = `             
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${ingreso._descripcion}</div>
            <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(ingreso._valor)}</div>
            <div class="elemento_eliminar"><button class="elemento_eliminar_btn"><ion-icon
            name="close-circle-outline" onclick="eliminarIngreso(${ingreso._id})"></ion-icon></button></div>
            </div>
        </div> <!-- end elemento limpiarEstilos-->`;
    return egresoHTML;
}

var cargarEgresos = () => {
    let egresosHTML='';
    for(let egreso of egresos){
        egresosHTML+=crearEgresoHTML(egreso);
        console.log(egreso);
    }
    console.log(egresosHTML);
    document.getElementById('lista-egresos').innerHTML=egresosHTML;
}

var crearEgresoHTML = (egreso) => {
    let egresoHTML = `             
        <div class="elemento limpiarEstilos">
            <div class="elemento_descripcion">${egreso._descripcion}</div>
            <div class="derecha limpiarEstilos">
            <div class="elemento_valor">${formatoMoneda(egreso._valor)}</div>
            <div class="elemento_eliminar"><button class="elemento_eliminar_btn"><ion-icon
            name="close-circle-outline" onclick="eliminarIngreso(${egreso._id})"></ion-icon></button></div>
            </div>
        </div> <!-- end elemento limpiarEstilos-->`;
    return egresoHTML;
}



