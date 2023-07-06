var Ibagens = ["aradia.gif", "Equius.png", "Gamzee.png", "hussie.png", "Jade.gif", 
"Jake.png", "Jane.png", "kanaya.gif", "KK.png", "Nepeta.gif", "rose.gif", "Vriska.png"];
var PraParar = true;
var contador = 0;

function Moonside(milliseconds) {
  let date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

function Rerandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function Trocatroca () 
{
    var Imagem = document.images[0];
    //console.log(Math.random());
    Imagem.src = Ibagens[Rerandom(0, 10)];
    contador++;
    if (contador == 20)
    {
        //PraParar = false;
    }

}

function Pare() 
{
    PraParar = false;
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}

async function Mastersprite () 
{
    while (PraParar) 
    {
        await sleep(100);
        //alert('espere');
        //setTimeout(Trocatroca(), 2000);
        Trocatroca();
    }
    
}

/*function Mastersprite () {
  Trocatroca();
  setTimeout(Mastersprite(), 1000);
}*/


