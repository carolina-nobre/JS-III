// [] instanciar XMLHttpRequest()
// [] o que fazer depois que receber a resposta
// [] fazer a requisição com open() e send()
// [] tratar response



// [] iterar sobre o array e mostrar as três imagens usando for()
// [] iterar sobre o array e mostrar as três imagens usando for...of
// [] iterar sobre o array e mostrar as três imagens usando forEach


const request = new XMLHttpRequest();
const url = './data/dados.json'

request.onreadystatechange = mostraDados;

request.open('GET',url);
request.send();

function mostraDados() {
    if(request.status === 200 && request.readyState === 4) {
        const response =  request.response;
        
     const json = JSON.parse(response);
        console.log(json);

        //const data =json.data[0].imagem;
        const body = document.body;
        body.innerHTML=body.innerHTML+`
        <img src= ${json.data[0].imagem}>
        <img src= ${json.data[1].imagem}>
        <img src= ${json.data[2].imagem}>
        `
    }
    
}

