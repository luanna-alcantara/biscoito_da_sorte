document.addEventListener('DOMContentLoaded', function () {

  const screen1 = document.querySelector('.screen1');
  const screen2 = document.querySelector('.screen2');
  const btnTry = document.getElementById('btnTry');
  const btnReset = document.getElementById('btnReset');
  const fortuneMessage = document.querySelector('.screen2 span');

// Oculta a tela 2 ao carregar a página
screen2.classList.add('hide');


// Evento de clique no botão "Abrir Biscoito"
btnTry.addEventListener('click', function () {
  //Mostra a tela 2
  screen1.classList.add('hide');
  screen2.classList.remove('hide') 

  //Mensagend de sorte
  const messages = [
    "A sorte está ao seu lado!",
    "Grandes realizações requerem tempo.",
    "Se esforce hoje, colha os frutos amanhã.",
    "Uma jornada de mil milhas começa com um único passo.",
    "Sua criatividade resolverá muitos problemas.",
    "Acredite em si mesmo e tudo será possível.",
    "Boas notícias estão a caminho.",
    "O sucesso chega para quem persiste.",
    "A vida trará coisas boas se tiver paciência.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "O bom-senso vale mais do que muito conhecimento.",
    "A adversidade é um espelho que reflete o verdadeiro eu.",
    "Surpreender e ser surpreendido é o segredo do amor.",
    "Faça pequenas coisas hoje e coisas maiores lhe serão confiadas amanhã.",
    "A sorte favorece a mente bem preparada.",
    "Todas as coisas são difíceis antes de se tornarem fáceis.",
    "Se você se sente só é porque construiu muros ao invés de pontes.",
    "Você é do tamanho do seu sonho.",
    "Nós somos o que pensamos.",
    "O insucesso é apenas uma oportunidade para recomeçar de novo com mais experiência.",
    "Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.",
    "Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera.",
    "Você sempre será a sua melhor companhia!"
  ]

  // Seleciona uma mensagem aleatória
  const luckyMessage = messages[Math.floor(Math.random() * messages.length)];

  // Exibe a mensagem na tela
  fortuneMessage.textContent = luckyMessage;

  // Adiciona a classe 'show' para tornar a .screen2 visível
  screen2.classList.add('show');
  });

  // Evento de clique no botão "Abrir outro biscoito"
  btnReset.addEventListener('click', function () {

  // Remove a classe 'show' para ocultar a .screen2
  screen2.classList.remove('show');
  screen1.classList.remove('hide');
});

});
