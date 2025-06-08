const dados = [
  {
    foto: 'advogado1.png',
    nome: 'Dr. Fulano',
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
