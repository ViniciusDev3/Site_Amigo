const dados = [
  {
    foto: 'advogado1.jpeg',
    nome: 'Dr. Fabaum',
    texto: '  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    foto: 'advogado1.png',
    nome: 'Dra. Beltrana',
    texto: '  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    foto: 'advogado1.png',
    nome: 'Dr. Cicrano',
    texto: '  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    foto: 'advogado1.png',
    nome: 'Dr. Cicrano',
    texto: '  Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

let index = 0;
const foto = document.getElementById('foto');
const nome = document.getElementById('nome');
const texto = document.getElementById('texto');
const bolinhasContainer = document.getElementById('bolinhas');

function mostrarSlide(i) {
  const item = dados[i];
  foto.src = item.foto;
  nome.textContent = item.nome;
  texto.textContent = item.texto;

  document.querySelectorAll('.bolinha').forEach((b, j) => {
    b.classList.toggle('ativa', j === i);
  });
}

function criarBolinhas() {
  dados.forEach((_, i) => {
    const span = document.createElement('span');
    span.classList.add('bolinha');
    span.addEventListener('click', () => {
      index = i;
      mostrarSlide(index);
    });
    bolinhasContainer.appendChild(span);
  });
}

function proximoSlide() {
  index = (index + 1) % dados.length;
  mostrarSlide(index);
}

window.onload = () => {
  criarBolinhas();
  mostrarSlide(index);
  setInterval(proximoSlide, 5000);
};


/*serviços card*/
const servicos = 
[
  {
    titulo: "Serviço 1",
    descricao: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident.`
  },
  {
    titulo: "Serviço 2",
    descricao: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident.`
  },
  {
    titulo: "Serviço 3",
    descricao: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident.`
  },
  {
    titulo: "Serviço 4",
    descricao: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident.`
  },
  {
    titulo: "Serviço 5",
    descricao: `Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur. Quis aute iure reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint obcaecat cupiditat non proident.`
  }
];

window.addEventListener("DOMContentLoaded", () => 
{
  const container = document.getElementById("servicos-container");
  const icones =
  [
    "fa-scale-balanced", "fa-file-contract", "fa-handshake", "fa-gavel",
    "fa-scale-balanced", "fa-file-contract", "fa-handshake", "fa-gavel",
    "fa-scale-balanced", "fa-file-contract", "fa-handshake", "fa-gavel"
  ];

  servicos.forEach((servico, index) => 
  {
    const box = document.createElement("div");
    box.className = "box-container";

    const header = document.createElement("div");
    header.className = "servico-header";

    const icon = document.createElement("i");
    icon.className = `fa-solid ${icones[index]} servico-icone`;
    
    const titulo = document.createElement("div");
    titulo.className = "titulo-servicos";
    titulo.textContent = servico.titulo;

    header.appendChild(icon);
    header.appendChild(titulo);

    const descricao = document.createElement("div");
    descricao.className = "descricao-servico";
    descricao.textContent = servico.descricao;

    box.appendChild(header);
    box.appendChild(descricao);

    container.appendChild(box);
  });
});