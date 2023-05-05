class Egreso extends Dato{
    static contadorEgresos=5000;
    constructor(descripcion, valor){
        super(descripcion, valor);
        this._id=++this.contadorEgresos;
    }
    get id(){
        return this._id;
    }
}