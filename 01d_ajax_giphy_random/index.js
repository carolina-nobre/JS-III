// fetch da imagem
// [] adicionar a tag <script> no html
// [] verificar se está lendo index.js
// [] usar o método fetch() para a url da API Giphy
// [] transformar o dado recebido
// [] apresentar <img>
// [] usar async/await, then(), .catch(), arrow function

const request = new XMLHttpRequest();
const img = document.getElementById('imagem')
const quero = 'gatos'
const url = `http://api.giphy.com/v1/gifs/search?q=${quero}&api_key=dc6zaTOxFJmzC&limit=5&offset=0`



request.onreadystatechange = mostraGif;
request.open('GET',url);
request.send();


function mostraGif() {
    if(request.status === 200 && request.readyState === 4) {
        const response =  request.response;
        
     const json = JSON.parse(response);//isso transforma em texto

     const data =json.data[1].images.original.url;//todo o caminho ate chegar na url guardado na const o 0 é a posição do objeto quando o data é arry
        img.src = data //adiciona o conteudo da const no src que no html o src esta vazio
    
        const body = document.body;
        body.innerHTML=`
        <img src= ${json.data[0].images.original.url}>
        <img src= ${json.data[1].images.original.url}>
        <img src= ${json.data[2].images.original.url}>
    `

    }
    
}
