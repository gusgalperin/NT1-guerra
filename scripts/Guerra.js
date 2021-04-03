var _jugador1;
var _jugador2;

var _numeroTurno;

inicio();

function inicio(){
    _jugador1 = new Guerrero('containerJugador1');
    _jugador2 = new Guerrero('containerJugador2');

    _jugador1.noTurno();
    _jugador2.noTurno();
}

function jugar(){
    document.getElementById('btnPelear').classList.add('disabled');
    document.getElementById('btnPelear').classList.remove('active');

    _jugador1.iniciaPelea();
    _jugador2.iniciaPelea();
    sortearQuienArranca();
}

function sortearQuienArranca(){
    _numeroTurno = Utils.random(1, 100);

    turno();
}

function turno(){
    if ( _numeroTurno % 2 == 0) {
        _jugador1.turno();
        _jugador2.noTurno();
    }
    else{
        _jugador2.turno();
        _jugador1.noTurno();
    }
}

function cambioTurno(){
    _numeroTurno ++;
    turno();
}

function jugador1_atacar(){
    ataque(_jugador1, _jugador2);
}

function jugador2_atacar(){
    ataque(_jugador2, _jugador1);
}

function ataque(de, hacia){
    let perdio = hacia.atacado();

    if(perdio){
        de.gano();
        hacia.perdio();
        fin();
    }
    else {
        cambioTurno();
    }
}

function jugador1_curar(){
    curar(_jugador1);
}

function jugador2_curar(){
    curar(_jugador2);
}

function curar(quien){
    quien.curado();
    cambioTurno();
}

function jugador1_swap(){
    swap(_jugador1, _jugador2);
}

function jugador2_swap(){
    swap(_jugador2, _jugador1);
}

function swap(de, hacia){
    if(de.puedeUsarSwap()){
        let previousStamina = de.getStamina();
        de.setStamina(hacia.getStamina(), true);
        hacia.setStamina(previousStamina, true);

        de.usoSwap();
    }
}

function fin(){
    _jugador1.noTurno();
    _jugador2.noTurno();

    document.getElementById('btnPelear').classList.remove('disabled');
    document.getElementById('btnPelear').classList.add('active');
}