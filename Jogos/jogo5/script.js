const perguntas = [
    {
      pergunta: "Qual super-herói é conhecido como 'O Cavaleiro das Trevas'?",
      respostas: [
        { opcao: "Batman", correto: true },
        { opcao: "Homem de Ferro", correto: false },
        { opcao: "Superman", correto: false },
        { opcao: "Capitão América", correto: false }
      ]
    },
    {
      pergunta: "Em qual país nasceu o jogo de futebol?",
      respostas: [
       
        { opcao: "Brasil", correto: false },
        { opcao: "Inglaterra", correto: true },
        { opcao: "Itália", correto: false },
        { opcao: "França", correto: false }
      ]
    },
    {
      pergunta: "Qual é o maior animal terrestre do mundo?",
      respostas: [
        
        { opcao: "Girafa", correto: false },
        { opcao: "Hipopótamo", correto: false },
        { opcao: "Urso Polar", correto: false },
        { opcao: "Elefante Africano", correto: true },
      ]
    },
    {
      pergunta: "Qual desenho animado tem personagens como Patrick e Lula Molusco?",
      respostas: [
        
        { opcao: "Hora de Aventura", correto: false },
        { opcao: "Os Simpsons", correto: false },
        { opcao: "Bob Esponja", correto: true },
        { opcao: "Padrinhos Mágicos", correto: false }
      ]
    },
    {
      pergunta: "Qual é o planeta conhecido como 'planeta vermelho'?",
      respostas: [
        
        { opcao: "Saturno", correto: false },
        { opcao: "Vênus", correto: false },
        { opcao: "Urano", correto: false },
        { opcao: "Marte", correto: true },
      ]
    },
    {
      pergunta: "Quem canta a música 'Shape of You'?",
      respostas: [
        
        { opcao: "Justin Bieber", correto: false },
        { opcao: "Shawn Mendes", correto: false },
        { opcao: "Ed Sheeran", correto: true },
        { opcao: "Harry Styles", correto: false }
      ]
    },
    {
      pergunta: "Qual desses jogos é famoso por ter o modo 'Battle Royale'?",
      respostas: [
        
        { opcao: "Minecraft", correto: false },
        { opcao: "The Sims", correto: false },
        { opcao: "FIFA", correto: false },
        { opcao: "Fortnite", correto: true }
      ]
    },
    {
      pergunta: "Qual é a capital do Japão?",
      respostas: [
        { opcao: "Tóquio", correto: true },
        { opcao: "Pequim", correto: false },
        { opcao: "Seul", correto: false },
        { opcao: "Bangkok", correto: false }
      ]
    }
  ];
  
  

  const perguntaElemento = document.querySelector(".pergunta");
  const respostasElemento = document.querySelector(".respostas");
  const progressoElemento = document.querySelector(".progresso");
  const textoFinal = document.querySelector(".fim span");
  const conteudo = document.querySelector(".conteudo");
  const conteudoFinal = document.querySelector(".fim");

  let indiceAtual = 0;
  let acertos = 0;

  function carregarPergunta() {
    progressoElemento.innerHTML = `${indiceAtual + 1} / ${perguntas.length}`;
    const perguntaAtual = perguntas[indiceAtual];
    perguntaElemento.innerHTML = perguntaAtual.pergunta;
    respostasElemento.innerHTML = "";

    perguntaAtual.respostas.forEach((resposta) => {
      const botao = document.createElement("button");
      botao.classList.add("botao-resposta");
      botao.innerText = resposta.opcao;
      botao.onclick = () => {
        if (resposta.correto) {
          acertos++;
        }

        indiceAtual++;

        if (indiceAtual < perguntas.length) {
          carregarPergunta();
        } else {
          finalizarJogo();
        }
      };
      respostasElemento.appendChild(botao);
    });
  }

  function finalizarJogo() {
    textoFinal.innerHTML = `Você acertou ${acertos} de ${perguntas.length} perguntas.`;
    conteudo.style.display = "none";
    conteudoFinal.style.display = "flex";
  }

  carregarPergunta();