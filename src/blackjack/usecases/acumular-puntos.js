import {valorCarta} from './valor-carta.js';

/**
 * Esta funcion acumula los puntos (turno: 0 = primer jugador y el ultimo la computadora)
 * @param {String} carta 
 * @param {number} turno 
 * @param {Array<number>} puntosJugadores 
 * @param {Array<HTMLElement>} puntosHTML 
 * @returns {number} retorna los puntos de los jugadores
 */

export const acumularPuntos = (carta, turno, puntosJugadores, puntosHTML) => {

    if(!puntosHTML || puntosHTML.length === 0)
        throw new Error("No se encontraron elementos HTML para mostrar puntos");
    if(!puntosJugadores)
        throw new Error("puntosJugadores debe ser un arreglo");
    if(typeof turno !== "number" || turno < 0)
        throw new Error("turno debe ser un numero valido");

    puntosJugadores[turno] = puntosJugadores[turno] + valorCarta(carta);
    puntosHTML[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
    }