// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response

const div = document.querySelector("#root");
const img = document.createElement('img');

const request = new XMLHttpRequest(); //pegando o xmlhttp e colocar dentro de uma constante

request.onreadystatechange = getDados; // pegua os dados quando tiver pronto
//ou

function getDados() {
    
    if (request.readyState === 4 && request.status ===200) { //quando tiver no estagio 4 vai estar pronto
       console.log("oi");
       
        const response = request.response;//resposta em texto
        const json = JSON.parse(response);// que transforma a resposta em objeto
        const data = json.data // pega o item img do obj
        const obj = data[0];// esse é o objto

        const imgSrc = obj.imagem//pega só a img do item 0
        img.scr = imgSrc;
        div.appendChild(img) 
    } else {
        console.log(request.readyState, request.status);
        
    }   
}

const url = './data/dados.json'
request.open('GET',url);//abriu a resquisição
request.send();



