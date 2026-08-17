/**
 * Esta funcion determina el ganador
 * @param {Array<number>} puntosJugadores 
 */

export const determinarGanador = (puntosJugadores) => {

    if(!Array.isArray(puntosJugadores) || puntosJugadores.length < 2)
        throw new Error("Se requieren los puntos de ambos jugadores");

    const [puntosMinimos, puntosComputadora] = puntosJugadores;

    setTimeout(() => {
        if(puntosComputadora > 21){
            alert("Felicitaciones, ganaste");
        }
        else if((puntosMinimos > puntosComputadora) && (puntosMinimos <= 21)){
            alert("Felicitaciones, ganaste");
        }
        else if(puntosMinimos === puntosComputadora){
            alert("Empataste");
        }
        else{
            alert("Perdiste");
        }
    },400);
}