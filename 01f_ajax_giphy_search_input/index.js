// XMLHttpRequest na rota search capturando informação do input
// trazer 10 imagens
// apresentar as imagens na div #root


const input = document.querySelector('#gifInput');

const request = new XMLHttpRequest()
request.onreadystatechange = pesqGif;
request.open('GET', url);
request.send();

