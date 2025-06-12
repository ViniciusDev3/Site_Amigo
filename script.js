const servicos = 
[
  {
    titulo: "Serviço 1",
    descricao: `Lorem ipsum dolor sit amet Os operadores gráficos e tipográficos sabem disso bem, na realidade, todas as profissões que lidam com o universo da comunicação têm um relacionamento estável com essas palavras, mas o que é? Lorem ipsum é um texto fofo sem qualquer sentido.É uma seqüência de palavras latinas que, como estão posicionadas, não formem frases com um sentido completo, mas dão vida a um texto de teste útil para preencher espaços que irão Posteriormente serão ocupados a partir de textos ad hoc compostos por profissionais de comunicação.  certamente o texto de marcador de posição mais famoso , mesmo que existam diferentes versões distinguíveis da ordem em que as palavras latinas são repetidas.Lorem ipsum contém as tipos de letra mais em uso, um aspecto que permite que você tenha uma visão geral da renderização do texto em termos de escolha da fonte e tamanho da fonte .Ao se referir a Lorem ipsum, diferentes expressões são usadas, nomeadamente texto de preenchimento , texto fictício , texto cego ou texto do espaço reservado: em suma, seu significado também pode ser zero, mas sua utilidade é tão clara quanto ao longo dos séculos e 
    resiste às versões irônicas e modernas que vieram com a chegada da web.`
  },
  {
    titulo: "Serviço 2",
    descricao: "Descrição do serviço 2."
  },
  {
    titulo: "Serviço 3",
    descricao: "Descrição do serviço 3."
  },
  {
    titulo: "Serviço 4",
    descricao: "Descrição do serviço 4."
  },
  {
    titulo: "Serviço 5",
    descricao: "Descrição do serviço 4."
  },
  {
    titulo: "Serviço 6",
    descricao: "Descrição do serviço 4."
  },
  {
    titulo: "Serviço 7",
    descricao: "Descrição do serviço 4."
  },
  {
    titulo: "Serviço 8",
    descricao: "Descrição do serviço 4."
  },
  {
    titulo: "Serviço 9",
    descricao: "Descrição do serviço 4."
  },
  {
    titulo: "Serviço 10",
    descricao: "Descrição do serviço 4."
  },
  {
    titulo: "Serviço 10",
    descricao: "Descrição do serviço 4."
  },
  {
    titulo: "Serviço 11",
    descricao: "Descrição do serviço 4."
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