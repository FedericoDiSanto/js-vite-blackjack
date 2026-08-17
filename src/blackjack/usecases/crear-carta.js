/**
 * Esta funcion crea una carta
 * @param {String} carta 
 * @param {number} turno 
 * @param {NodeListOf<Element>} divCartasJugadores 
 */

export const crearCarta = (carta, turno, divCartasJugadores) => {

    if(typeof turno !== "number" || turno < 0)
        throw new Error("turno debe ser un numero valido");
    if(!divCartasJugadores)
        throw new Error("No se recibieron los contenedores de cartas");
    if(!carta || typeof carta !== "string")
        throw new Error("La carta es obligatoria");

    const imgCarta = document.createElement("img");
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add("carta");
    divCartasJugadores[turno].append(imgCarta);
}