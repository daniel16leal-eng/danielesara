/* CONTADOR */

const dataCasamento = new Date("May 15, 2027 18:00:00").getTime();

setInterval(function(){

const agora = new Date().getTime();

const distancia = dataCasamento - agora;

const dias = Math.floor(distancia/(1000*60*60*24));
const horas = Math.floor((distancia%(1000*60*60*24))/(1000*60*60));
const minutos = Math.floor((distancia%(1000*60*60))/(1000*60));
const segundos = Math.floor((distancia%(1000*60))/1000);

document.getElementById("contador").innerHTML =
`Faltam ${dias} dias, ${horas}h ${minutos}m ${segundos}s`;

},1000);


/* MÚSICA */

const musica = document.getElementById("musica");
const botao = document.getElementById("botaoMusica");

function iniciarMusica(){

musica.play().then(()=>{

botao.innerText="⏸️ Pausar Música";

}).catch(()=>{});

}

document.body.addEventListener("click", iniciarMusica, { once:true });


function toggleMusica(){

if(musica.paused){

musica.play();
botao.innerText="⏸️ Pausar Música";

}else{

musica.pause();
botao.innerText="🎵 Ativar Música";

}

}


/* PIX */

function copiarPix(){

const chave = document.getElementById("pix").innerText;

navigator.clipboard.writeText(chave);

const msg = document.getElementById("mensagemPix");

msg.style.display="block";

setTimeout(()=>{

msg.style.display="none";

},2500);

}


/* ANIMAÇÃO DAS SEÇÕES */

const sections = document.querySelectorAll("section");

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
