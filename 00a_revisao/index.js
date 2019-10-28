// 1.
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] alterar cor de <body>
// [] escutar o clique do botão
// [] criar função de alterar a cor usando rgb()
// [] usar Math.random() e Math.floor() ou parseInt()

const body = document.querySelector('body');
console.log(body);

//const n = Math.random();
//const n2 = n *255;
//const int = parseInt(n2);

//console.log(n);
//console.log(n, n2);
//console.log('int:',int);

//const intRandom =  parseInt(Math.random()*255)

const botao = document.getElementById('trocaCor');
botao.addEventListener('click',clicou)

function geraInteiro() {
   const n = parseInt(Math.random()*255);
    return n;
}

function clicou() {
    const r = geraInteiro();
    const g = geraInteiro();
    const b = geraInteiro();
    
    console.log('entrei'); 
    body.style.backgroundColor = 'rgb('+r+','+ g +','+ b +')'
    console.log(r,g,b);
}