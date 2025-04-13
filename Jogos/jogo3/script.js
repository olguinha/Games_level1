let rodada = 1;

function abrirModal() {
  document.getElementById("modalJogo").style.display = "flex";
  rodada = 1;
  atualizarMensagem("Escolha o vidro para a rodada 1.");
}

function fecharModal() {
  document.getElementById("modalJogo").style.display = "none";
}

function atualizarMensagem(texto) {
  document.getElementById("mensagem").innerText = texto;
}

function jogar(escolha) {
  const vidroQuebrado = Math.floor(Math.random() * 3) + 1;

  if (escolha === vidroQuebrado) {
    atualizarMensagem(`💥 O vidro ${vidroQuebrado} quebrou! Você perdeu na rodada ${rodada}.`);
    desativarEscolhas();
  } else {
    if (rodada >= 3) {
      atualizarMensagem("🎉 Você venceu! Parabéns por ter coragem até o fim!");
      desativarEscolhas();
    } else {
      rodada++;
      atualizarMensagem(`✅ Passou! Vá para a rodada ${rodada}. Escolha novamente.`);
    }
  }
}

function desativarEscolhas() {
  const botoes = document.querySelectorAll(".choices button");
  botoes.forEach(btn => btn.disabled = true);
}