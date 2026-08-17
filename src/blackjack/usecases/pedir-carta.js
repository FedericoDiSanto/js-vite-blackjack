/**
 * Esta funcion pide una carta
 * @param {Array<String>} deck es un arreglo de string
 * @returns {String} retorna una carta de la baraja
 */

// funcion que permite agarrar una carta
export const pedirCarta = (deck) => {

    if(!Array.isArray(deck) || deck.length === 0)
        throw new Error("No es un arreglo de cartas o no hay mas cartas en la baraja");

    const carta = deck.pop();
    return carta;
} 