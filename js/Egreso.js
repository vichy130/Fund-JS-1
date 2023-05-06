class Egreso extends Dato{
    static contadorEgresos=0;

    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id= Egreso.contadorEgresos++;
        console.log("contador egresos "+ Egreso.contadorEgresos);
        console.log("id "+this._id);
    }
    get id(){
        return this._id;
    }
}