import {pedirCarta} from './pedir-carta.js'; 
import {acumularPuntos} from './acumular-puntos.js';
import {crearCarta} from './crear-carta.js';
import {determinarGanador} from './determinar-ganador.js';

/**
 * Esta funcion permite que la computadora juegue su turno
 * @param {number} puntosMinimos puntos minimos que la computadora necesita para ganar
 * @param {Array<String>} deck 
 * @param {Array<number>} puntosJugadores 
 * @param {Array<HTMLElement>} puntosHTML 
 * @param {NodeListOf<Element>} divCartasJugadores 
 */

export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {

    if(typeof puntosMinimos !== "number" || puntosMinimos < 0)
        throw new Error("Puntos minimos debe ser un numero valido");
    if(!Array.isArray(deck) || deck.length === 0)
        throw new Error("El deck edebe ser un arrreglo con cartas");
    if(!Array.isArray(puntosJugadores) || puntosJugadores.length < 2)
        throw new Error("puntosJugadores debe ser un arreglo valido");
    if(!puntosHTML || puntosHTML.length === 0)
        throw new Error("No se encontraron los elementos de puntaje");
    if(!divCartasJugadores)
        throw new Error("No se encontraron los contenedores de cartas");
        
    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, puntosJugadores.length - 1, puntosJugadores, puntosHTML);
        crearCarta(carta, puntosJugadores.length - 1, divCartasJugadores);

      }while((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));

        determinarGanador(puntosJugadores);
    }
