import _ from "underscore";
import {crearDeck} from './usecases/crear-deck.js';
import {pedirCarta} from './usecases/pedir-carta.js';
import {valorCarta} from './usecases/valor-carta.js';
import {acumularPuntos} from './usecases/acumular-puntos.js';
import {crearCarta} from './usecases/crear-carta.js';
import {determinarGanador} from './usecases/determinar-ganador.js';
import {turnoComputadora} from "./usecases/turno-computadora.js";

// import {crearDeck as crearNuevoDeck} from './usecases/crear-deck'; ----> el as me permite darle un alias por si ya hay una funcion llamada asi

// import {crearDeck, pedirCarta, valorCarta} from './usecases/index.js';

/*
2C = Two of Clubs (Treboles)
2D = Two of Diamonds (Diamantes)
2H = Two of Hearts (Corazones)
2S = Two of Spades (Picas)

*/

// funcion que crea una baraja

const miModulo = (() => {

    "use strict"

    let deck = [];
    const tipos = ["C","D","H","S"];
    const especiales = ["A","J","Q","K"];


    let puntosJugadores = [];

    // Referencias del HTML

    const btnPedir = document.querySelector("#btnPedir");
    const puntosHTML = document.querySelectorAll("small");
    const divCartasJugadores = document.querySelectorAll(".divCartas");
    const btnDetener = document.querySelector("#btnDetener");
    const btnNuevo = document.querySelector("#btnNuevo");

    // esta funcion inicializa el juego
    const inicializarJuego = (numeroJugadores = 2) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for(let i=0; i<numeroJugadores; i++){
            puntosJugadores.push(0);
        }
        puntosHTML.forEach(elem => elem.innerText = 0);
        divCartasJugadores.forEach(elem => elem.innerHTML = "");
        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    // Eventos

    btnPedir.addEventListener("click", () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(carta, 0, puntosJugadores, puntosHTML);
        crearCarta(carta, 0, divCartasJugadores);

        if(puntosJugador > 21){
            // console.warn("Perdiste");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);

        }else if(puntosJugador === 21){
            // console.warn("21, genial!");
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHTML, divCartasJugadores);
        }
    });


    btnDetener.addEventListener("click", () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHTML, divCartasJugadores);
    });

    btnNuevo.addEventListener("click", () => {
        inicializarJuego();
    });

    // inicializarJuego(); ---> para que arranque sin tener que tocar nuevo juego en el navegador

    return {
        nuevoJuego : inicializarJuego  
    };

})();
