document.addEventListener("DOMContentLoaded", function () {

/* CONTADOR */

const dataCasamento = new Date("May 15, 2027 18:00:00").getTime();

setInterval(function(){

const agora = new Date().getTime();
const distancia = dataCasamento - agora;

const dias = Math.floor(distancia/(1000*60*60*24));
const horas = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));
const minutos = Math.floor((distancia%(1000*60*60))/(1000*60));
const segundos = Math.floor((distancia%(1000*60))/1000);

const contador = document.getElementById("contador");

if(contador){
contador.innerHTML = `Faltam ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;
}

},1000);


/* MÚSICA */

const musica = document.getElementById("musica");
const botao = document.getElementById("botaoMusica");

function iniciarMusica(){

if(musica){

musica.play().then(()=>{

if(botao){
botao.innerText="⏸️ Pausar Música";
}

}).catch(()=>{});

}

}

document.body.addEventListener("click", iniciarMusica, { once:true });


window.toggleMusica = function(){

if(!musica) return;

if(musica.paused){

musica.play();

if(botao){
botao.innerText="⏸️ Pausar Música";
}

}else{

musica.pause();

if(botao){
botao.innerText="🎵 Ativar Música";
}

}

}


/* PIX */

window.copiarPix = function(){

const chave = document.getElementById("pix").innerText;

if(navigator.clipboard){

navigator.clipboard.writeText(chave).then(()=>{
mostrarMensagem();
}).catch(()=>{
copiarFallback(chave);
});

}else{

copiarFallback(chave);

}

}

function copiarFallback(texto){

const input = document.createElement("textarea");
input.value = texto;

document.body.appendChild(input);

input.select();
document.execCommand("copy");

document.body.removeChild(input);

mostrarMensagem();

}

function mostrarMensagem(){

const msg = document.getElementById("mensagemPix");

msg.style.display="block";

setTimeout(()=>{
msg.style.display="none";
},2500);

}

/* CARROSSEL */

let index = 0;

window.mover = function(direcao){

const carrossel = document.getElementById("carrossel");
const imagens = carrossel.querySelectorAll("img");

index += direcao;

if(index < 0){
index = imagens.length - 1;
}

if(index >= imagens.length){
index = 0;
}

carrossel.style.transform = `translateX(-${index * 100}%)`;

}


/* AUTO SLIDE */

setInterval(function(){

window.mover(1);

}, 5000);
  
/* PETALAS CAINDO */

function criarPetala(){

const petala = document.createElement("div");

petala.classList.add("petala");

petala.style.left = Math.random() * 100 + "vw";

petala.style.animationDuration = (Math.random() * 5 + 5) + "s";

petala.style.opacity = Math.random();

document.body.appendChild(petala);

setTimeout(()=>{

petala.remove();

},10000);

}

setInterval(criarPetala, 400);

  
/* ANIMAÇÃO DAS SEÇÕES */

const sections = document.querySelectorAll("section");

if(sections.length > 0){

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("ativo");

}

});

},{ threshold:0.2 });

sections.forEach((section)=>{

observer.observe(section);

});

}

});
