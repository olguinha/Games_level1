// Função para verificar a idade do usuário
function verificarIdade() {
  // Obtém o valor digitado no campo de entrada de idade e converte para inteiro
  const idade = parseInt(document.getElementById("idadeInput").value);
  
  // Obtém o elemento onde a mensagem de erro será exibida
  const erroMsg = document.getElementById("erroMsg");

  // Verifica se a idade é inválida (NaN) ou menor que 18 anos
  if (isNaN(idade) || idade < 18) {
    // Se for inválido ou menor que 18, exibe a mensagem de erro
    erroMsg.style.display = "block";
  } else {
    // Se for válido (idade maior ou igual a 18), oculta a mensagem de erro
    erroMsg.style.display = "none";
    
    // Fecha o modal de idade
    document.getElementById("modalIdade").style.display = "none";
  }
}

// Função para abrir o modal do jogo
function abrirModalJogo() {
  // Exibe o modal do jogo
  document.getElementById("modalJogo").style.display = "flex";
}

// Função para fechar o modal do jogo
function fecharModal() {
  // Oculta o modal do jogo
  document.getElementById("modalJogo").style.display = "none";
  
  // Limpa o conteúdo do resultado exibido
  document.getElementById("resultado").innerHTML = "";
}

// Função principal do jogo, onde o jogador escolhe pedra, papel ou tesoura
function jogar(escolhaJogador) {
  // Gera a escolha aleatória do computador entre 1 (Pedra), 2 (Papel) e 3 (Tesoura)
  const escolhaComp = Math.floor(Math.random() * 3) + 1;
  
  // Array de opções correspondentes aos números (1 = Pedra, 2 = Papel, 3 = Tesoura)
  const opcoes = ["", "Pedra", "Papel", "Tesoura"];

  // Variável para armazenar o resultado do jogo
  let resultado = "";

  // Condição de empate (quando as escolhas do jogador e do computador são iguais)
  if (escolhaJogador === escolhaComp) {
    resultado = "Empate!";
  } 
  // Condições para o jogador vencer (usa regras do jogo Pedra, Papel, Tesoura)
  else if (
    (escolhaJogador === 1 && escolhaComp === 3) ||  // Pedra vence Tesoura
    (escolhaJogador === 2 && escolhaComp === 1) ||  // Papel vence Pedra
    (escolhaJogador === 3 && escolhaComp === 2)     // Tesoura vence Papel
  ) {
    resultado = "Você venceu!";
  } else {
    // Caso contrário, o computador venceu
    resultado = "Computador venceu!";
  }

  // Exibe o resultado final do jogo no elemento 'resultado' na página
  document.getElementById("resultado").innerHTML = `
    <p>Você escolheu: <strong>${opcoes[escolhaJogador]}</strong></p>
    <p>Computador escolheu: <strong>${opcoes[escolhaComp]}</strong></p>
    <p style="font-size: 1.2em;">${resultado}</p>
  `;
}

// Força a exibição do modal de idade assim que a página for carregada
window.onload = () => {
  // Exibe o modal de idade ao carregar a página
  document.getElementById("modalIdade").style.display = "flex";
};
