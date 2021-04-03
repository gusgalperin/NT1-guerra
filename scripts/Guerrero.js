const ATAQUE_RANGO_MIN = 5;
const ATAQUE_RANGO_MAX = 10;
const CURAR_RANGO_MIN = 1;
const CURAR_RANGO_MAX = 15;

class Guerrero{

    constructor(container) {
        this._container = document.getElementById(container);
        this._barra = new BarraVida(container, 0);
        this._puntaje = 0;
        this._usoSwap = false;
    }

    iniciaPelea(){
        this.setStamina(100, true);
        this.setResultado('');
        this._usoSwap = false;
        document.getElementById('jugadaActual').innerText = '';
    }

    atacado(){
        let cuanto = Utils.random(ATAQUE_RANGO_MIN, ATAQUE_RANGO_MAX)
        this.setStamina(cuanto * -1, false);

        return this._stamina == 0;
    }

    curado(){
        let cuanto = Utils.random(CURAR_RANGO_MIN, CURAR_RANGO_MAX)
        this.setStamina(cuanto, false);
    }

    getStamina(){
        return this._stamina;
    }

    setStamina(cuanto, reset){
        if(reset){
            this._stamina = cuanto;
        }
        else{
            if(this._stamina + cuanto > 100){
                cuanto = 100 - this._stamina;
            }

            if(this._stamina + cuanto < 0){
                cuanto = this._stamina * -1;
            }

            this._stamina += cuanto;

            let jugadaActual;

            if(cuanto > 0){
                jugadaActual = '+' + cuanto;
            }
            else{
                jugadaActual = cuanto;
            }

            document.getElementById('jugadaActual').innerText = jugadaActual + ' !';
        }

        this._barra.set(this._stamina);
    }

    gano(){
        this.setResultado('GANADOR');
        this._puntaje++;
        this.mostrarPuntaje();
    }

    perdio(){
        this.setResultado('PERDEDOR');
    }

    setResultado(res){
        let lbl = this._container.getElementsByClassName('resultado')[0];
        lbl.innerText = res;
        if(res == ''){
            lbl.classList.add('hide');
        }
        else{
            lbl.classList.remove('hide');
        }

    }

    mostrarPuntaje(){
        let lbl = this._container.getElementsByClassName('puntaje')[0];
        lbl.innerText = this._puntaje;
    }

    usoSwap(){
        this._usoSwap = true;
    }

    puedeUsarSwap(){
        return !this._usoSwap;
    }

    turno(){
        this._container.classList.add('turnoActual');
        Utils.disableElems(this._container.getElementsByTagName('input'), false);
        this._container.getElementsByClassName('flecha-turno')[0].classList.remove('hide');
    }

    noTurno(){
        this._container.classList.remove('turnoActual');
        Utils.disableElems(this._container.getElementsByTagName('input'), true);
        this._container.getElementsByClassName('flecha-turno')[0].classList.add('hide');
    }
}