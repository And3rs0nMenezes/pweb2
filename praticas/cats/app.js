const buscarGatinhos = (e) => {
    e.preventDefault()
    const xhr = new XMLHttpRequest()
    xhr.open('GET', 'https://api.thecatapi.com/v1/images/search?limit=10')
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const cats = JSON.parse(xhr.responseText)
                cats.forEach(cat => {
                    
                    const divImagens = document.createElement("div");
                    const imagem = document.createElement("img");
                    const tamanhoH3 = document.createElement("h5");
                    const name = document.createElement("h5")
                    
                    imagem.src = cat.url;
                    tamanhoH3.innerText = `${cat.width} x ${cat.height}`
                    name.innerText = cat.id

                    divImagens.appendChild(imagem);
                    divImagens.appendChild(tamanhoH3);
                    divImagens.appendChild(name);
                    divImagens.classList.add("div-imagens")

                    document.getElementById("gatinhos").appendChild(divImagens);
                })
            } else {
                alert('Erro na requisição.')
            }
        }
    }
    xhr.send()
}

const btnMostrar = document.querySelector("#mostrar-gatinhos")
btnMostrar.addEventListener("click", buscarGatinhos)

const getMarcas = () => {
    const tarefas = fetch('https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/data.json')


tarefas
    .then(resposta => resposta.json())
    .then(marcas => {
        const ul = document.createElement('ul')
        marcas.forEach(marca => {
            const li = document.createElement('li')
            const logo = document.createElement('img')
            logo.src = marca.image?.optimized
            const name = document.createElement('p')
            name.src = marca.name
            li.appendChild(logo)
            ul.appendChild(li)
            console.log(marcas)
        })
        document.body.appendChild(ul)
    })
    .catch(erro => console.log(erro))
}
const btnMarcas = document.querySelector("#mostrar-marcas")
btnMarcas.addEventListener("click",getMarcas)
