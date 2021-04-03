# Consigna

1. Existen 2 jugadores

2. Cada jugador tiene de Stamina (energia) 100

3. Existe un boton de Atacar que lo que hace es golpea con un random de 5 a 10 sobre el otro jugador

4. Existe un boton de Curar que lo que hace es curarse a si mismo con un random de 1 a 15

5. Swap: Boton que si es tocado, 
* Invierte las stamina y solo puede ser tocado 1 vez por jugador
* El jugador no deberia perder el turno, sino que deberia poder volver a tocar.

Reglas Generales.
* No puede tener mas de 100 stamina
* Cuando llega a 0 pierde

Ejemplo :
> El jugador A y B tiene 100 de stamina
> Jugador A presiona Atacar. Random da 9, resultado : Energia de B queda en 91
> Jugador B presiona Atacar. Random da 5, resultado : Energia de A queda en 95
> Jugadr A presiona Curar. Random da 1, resultado : Energia de A queda en 96
