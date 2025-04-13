// Função para abrir a modal de conversão de moedas
function abrirModal() {
    // Exibe a modal alterando o estilo para 'block'
    document.getElementById('modalConversor').style.display = 'block';
    modal.style.display = 'flex'; // torna visível e ativa o flexbox
  }
  
  // Função para fechar a modal de conversão
  function fecharModal() {
    // Oculta a modal alterando o estilo para 'none'
    document.getElementById('modalConversor').style.display = 'none';
  
    // Limpa o campo de entrada de valor em Wons
    document.getElementById('valorWons').value = '';
  
    // Limpa o resultado exibido
    document.getElementById('resultado').textContent = '';
  }
  
  // Função responsável por realizar a conversão de Wons para Reais
  function converter() {
    // Captura o valor digitado pelo usuário e converte para número decimal
    const valorWons = parseFloat(document.getElementById('valorWons').value);
  
    // Taxa de conversão: 1 Won = R$ 0,0040
    const taxaConversao = 0.0040;
  
    // Verifica se o valor inserido é um número válido e maior que zero
    if (isNaN(valorWons) || valorWons <= 0) {
      // Exibe mensagem de erro caso o valor seja inválido
      document.getElementById('resultado').textContent = 'Por favor, insira um valor válido.';
      return;
    }
  
    // Realiza o cálculo da conversão e limita a duas casas decimais
    const valorConvertido = (valorWons * taxaConversao).toFixed(2);
  
    // Exibe o valor convertido em Reais na tela
    document.getElementById('resultado').textContent = `R$ ${valorConvertido}`;
  }
  
  // Evento global que detecta cliques na janela
  // Se o clique for fora do conteúdo da modal, ela será fechada
  window.onclick = function(event) {
    const modal = document.getElementById('modalConversor');
  
    // Verifica se o clique foi fora do conteúdo da modal
    if (event.target == modal) {
      fecharModal(); // Fecha a modal
    }
  }
  
