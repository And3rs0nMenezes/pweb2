const nome = 'Anderson';
alert(nome);
document.write(`Boas vindas ${nome}!`);

//---tamanho da página---//

let w = window.innerWidth;
let h = window.innerHeight;
let x = document.getElementById("ex"); //Adicionar o HTML na DIV com o ID = ex
x.innerHTML = "Largura:" + w + "<br>" + "Altura:" + h ;

//---abrir uma nova janela---//

let novaJanela;

function abrirJanela(){
    novaJanela = window.open("https://www.youtube.com/","novaJanela","with=200,height=200")
    novaJanela.document.write("<p>Uma nova janela foi criada !</P>") //caso preciso colocar um link , essa linha deve estar comentada pq sobrescreve a linha de cima.
}
function fecharJanela(){
    novaJanela.close();
}

//----- -----//
