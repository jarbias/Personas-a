export default class Persona {
    constructor(){

        this.contGen = 0;
        this.contH = 0;
        this.contM = 0;
        
    }

    procesarDatos(d){

        this.contGen ++;

        if (d.sexo == 'M') {
            this.contH ++;
        }else{
            this.contM ++;
        };


    }

    porcM(){
        return (this.contM * 100 / this.contGen).toFixed(2);
    }

    sexoMayorAsis(){
        if (this.contH > this.contM) {
            return 'Hay mas hombres ';
        }else if(this.contH < this.contM){
            return 'Hay mas mujeres ';
        }else{
            return 'igual asistencia femenina y masculina';
        }
    }
}