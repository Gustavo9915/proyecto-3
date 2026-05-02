
function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");
for(let contador = 0; contador < listaDeTeclas.length; contador++){
    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    console.log(contador);
    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);
    tecla.omclick = function (){
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){
        if(evento.code === `Space` || evento.code ===  `enter`){
            tecla.classList.add(`Activa`);
        }
        console.log(evento.code === `Space` || evento.cade === `enter`);
    }

    tecla.onkeyup = function(){
        tecla.classList.renove(`activa`);
    }
}