const servicos = 
[
  {
    titulo: "Serviço 1",
    descricao: "Descrição do serviço 1."
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
  }
];

window.addEventListener("DOMContentLoaded", () => 
{
  const container = document.getElementById("servicos-container");

  servicos.forEach(servico => 
  {
    const box = document.createElement("div");
    box.className = "box-container";

    const titulo = document.createElement("div");
    titulo.className = "titulo-servicos";
    titulo.textContent = servico.titulo;

    const descricao = document.createElement("div");
    descricao.textContent = servico.descricao;

    box.appendChild(titulo);
    box.appendChild(descricao);

    container.appendChild(box);
  });
});