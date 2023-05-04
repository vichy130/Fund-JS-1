var cargarCabecero = ()=>{
    var presupuesto= totalIngresos()-totalEgresos();
    var porcentajeEgreso= totalEgresos()/totalIngresos();
}
var totalIngresos=()=>{
    let totalIngreso=0;
    let ingreso=[];
    for(let elemento of ingreso){totalIngreso+=elemento};
    return totalIngresos;
}
var totalEgresos=()=>{
    let totalEgreso=0;
    let egreso=[];
    for(let elemento of egreso){totalEgreso+=elemento};
    return totalEgreso;
}
var formatoMoneda= (valor)=>{
    /*valor=valor.toFixed(2)*/
    valor=valor.toLocaleString("es-MX",{style: 'currency',currency: 'MXN', minimumFractionDigits: 2});
    return valor;
}

var formatoPorcentaje = (valor) => {
    valor=valor.toLocaleString("es-MX",{style: 'percent',percent: '%', minimumFractionDigits: 2});
    return valor;
}
