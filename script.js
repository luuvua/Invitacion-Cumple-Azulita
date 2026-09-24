/* =========================================
   CONFIGURACIÓN
========================================= */

/*
    CAMBIÁ ESTOS DATOS CUANDO LOS TENGAS
*/


const AÑO = 2026;

// Hora del cumpleaños
// Ejemplo: "16:00:00"
const HORA = "16:00:00";


/*
    NÚMERO DE WHATSAPP

    Cuando lo tengas, escribilo así:

    5491123456789

    SIN +, SIN ESPACIOS Y SIN GUIONES.
*/

const NUMERO_WHATSAPP = "";


/*
    MENSAJE AUTOMÁTICO
*/

const MENSAJE_WHATSAPP =
    "Hola! Confirmo mi asistencia al cumpleaños 💙";


/* =========================================
   ABRIR INVITACIÓN
========================================= */

const botonAbrir =
    document.getElementById("abrirInvitacion");

const inicio =
    document.getElementById("inicio");

const invitacion =
    document.getElementById("invitacion");


botonAbrir.addEventListener("click", function () {

    inicio.style.display = "none";

    invitacion.classList.add("mostrar");

    reproducirMusica();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================
   MÚSICA
========================================= */

const musica =
    document.getElementById("musica");

const botonMusica =
    document.getElementById("botonMusica");


let musicaReproduciendo = false;


function reproducirMusica() {

    musica.play()
        .then(function () {

            musicaReproduciendo = true;

            botonMusica.innerHTML = "🔊";

        })
        .catch(function () {

            /*
                Algunos celulares bloquean
                la reproducción automática.

                En ese caso el usuario puede
                tocar el botón de música.
            */

            botonMusica.innerHTML = "🎵";

        });

}


botonMusica.addEventListener("click", function () {

    if (musicaReproduciendo) {

        musica.pause();

        musicaReproduciendo = false;

        botonMusica.innerHTML = "🔇";

    } else {

        musica.play();

        musicaReproduciendo = true;

        botonMusica.innerHTML = "🔊";

    }

});


/* =========================================
   CUENTA REGRESIVA
========================================= */


function actualizarContador() {

    const fechaCumpleaños =
        new Date(
            `${AÑO}-12-05T${HORA}`
        );


    const ahora =
        new Date();


    const diferencia =
        fechaCumpleaños - ahora;


    if (diferencia <= 0) {

        document.getElementById("dias")
            .innerText = "00";

        document.getElementById("horas")
            .innerText = "00";

        document.getElementById("minutos")
            .innerText = "00";

        document.getElementById("segundos")
            .innerText = "00";

        return;

    }


    const dias =
        Math.floor(
            diferencia /
            (1000 * 60 * 60 * 24)
        );


    const horas =
        Math.floor(
            (diferencia /
            (1000 * 60 * 60)) % 24
        );


    const minutos =
        Math.floor(
            (diferencia /
            (1000 * 60)) % 60
        );


    const segundos =
        Math.floor(
            (diferencia /
            1000) % 60
        );


    document.getElementById("dias")
        .innerText =
        String(dias).padStart(2, "0");


    document.getElementById("horas")
        .innerText =
        String(horas).padStart(2, "0");


    document.getElementById("minutos")
        .innerText =
        String(minutos).padStart(2, "0");


    document.getElementById("segundos")
        .innerText =
        String(segundos).padStart(2, "0");

}


actualizarContador();


setInterval(
    actualizarContador,
    1000
);


/* =========================================
   WHATSAPP
========================================= */

const whatsapp =
    document.getElementById("whatsapp");


whatsapp.addEventListener("click", function (evento) {

    evento.preventDefault();


    if (NUMERO_WHATSAPP === "") {

        alert(
            "Todavía falta agregar el número de WhatsApp."
        );

        return;

    }


    const mensaje =
        encodeURIComponent(
            MENSAJE_WHATSAPP
        );


    const enlace =
        `https://wa.me/${NUMERO_WHATSAPP}?text=${mensaje}`;


    window.open(
        enlace,
        "_blank"
    );

});