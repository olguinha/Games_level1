// Seleciona os elementos HTML necessários
const startGameBtn = document.getElementById("startGameBtn");
const gameModal = document.getElementById("gameModal");
const nameModal = document.getElementById("nameModal");
const closeGameModal = document.getElementById("closeGameModal");
const confirmNamesBtn = document.getElementById("confirmNamesBtn");

// Ao clicar no botão "Iniciar Jogo", exibe as duas modais (jogo e nomes)
startGameBtn.onclick = () => {
  gameModal.style.display = "block"; // Exibe a modal principal do jogo
  nameModal.style.display = "block"; // Exibe a modal para digitar os nomes dos personagens
};

// Ao clicar no botão de fechar (X), esconde a modal do jogo
closeGameModal.onclick = () => {
  gameModal.style.display = "none";
};

// Fecha as modais se o usuário clicar fora delas (na parte escura da tela)
window.onclick = (e) => {
  if (e.target === gameModal) gameModal.style.display = "none";
  if (e.target === nameModal) nameModal.style.display = "none";
};

// Ao confirmar os nomes, pega os valores dos inputs e inicia o jogo
confirmNamesBtn.onclick = () => {
  // Pega os nomes digitados, ou usa nomes padrão se os campos estiverem vazios
  const nome1 = document.getElementById("nome1").value || "Personagem 1";
  const nome2 = document.getElementById("nome2").value || "Personagem 2";
  const nome3 = document.getElementById("nome3").value || "Personagem 3";

  // Esconde a modal de nomes
  nameModal.style.display = "none";

  // Inicia o jogo com os nomes digitados
  iniciarJogo([nome1, nome2, nome3]);
};

// Função que executa o jogo com os nomes dos personagens
function iniciarJogo(nomes) {
  const personagem = nomes; // Lista dos nomes dos personagens
  const viloes = []; // Lista que vai armazenar os nomes dos vilões
  let forcaPersonagem = 0; // Força total dos personagens
  let forcaViloes = 0; // Força total dos vilões

  // Gera força aleatória para os 3 personagens (entre 1 e 10)
  for (let i = 0; i < 3; i++) {
    forcaPersonagem += Math.floor(Math.random() * 10) + 1;
  }

  // Lista de vilões possíveis
  const viloesPossiveis = ["Bia Falcão", "Antonio", "Carminha", "Pearl", "Félix"];

  // Escolhe 3 vilões aleatórios e gera força para cada um
  for (let i = 0; i < 3; i++) {
    const indice = Math.floor(Math.random() * viloesPossiveis.length);
    viloes[i] = viloesPossiveis[indice];
    forcaViloes += Math.floor(Math.random() * 10) + 1;
  }

  // Exibe os jogadores com suas forças totais
  document.getElementById("informacoesJogador").innerText =
    "Jogadores: " + personagem.join(", ") + ` | Força total: ${forcaPersonagem}`;

  // Exibe os vilões com suas forças totais
  document.getElementById("informacoesComputador").innerText =
    "Vilões: " + viloes.join(", ") + ` | Força total: ${forcaViloes}`;

  // Verifica o resultado da batalha e exibe o resultado
  let resultado = "";
  if (forcaPersonagem > forcaViloes) {
    resultado = "🎉 Você venceu!";
  } else if (forcaPersonagem < forcaViloes) {
    resultado = "😢 Os vilões venceram!";
  } else {
    resultado = "⚖️ Empate!";
  }

  // Mostra o resultado final do jogo
  document.getElementById("resultadoFinal").innerText = resultado;
}
