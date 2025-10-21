const quotes = [
    "A vida não é medida pelo número de respirações que damos, mas pelos momentos que nos tiram o fôlego. – George Carlin",
    "O verdadeiro conhecimento é saber que você não sabe. – Sócrates",
    "A felicidade não é algo pronto. Ela vem de suas próprias ações. – Dalai Lama",
    "Não é a carga que quebra você, é a maneira como você a carrega. – Lou Holtz",
    "A maior parte do sofrimento humano é causado por nossa resistência a aceitar o que está acontecendo. – Eckhart Tolle",
    "Se você quer ser feliz, seja. – Leo Tolstoy",
    "A única maneira de lidar com um mundo sem liberdade é se tornar tão absolutamente livre que sua própria existência seja um ato de rebelião. – Albert Camus",
    "Não é o que acontece com você, mas como você reage a isso que importa. – Epicteto",
    "O que sabemos é uma gota, o que ignoramos é um oceano. – Isaac Newton",
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. – John Lennon"
];

function generateQuote() {
    const today = new Date();
    const dayOfYear = today.getDate();
    const quoteIndex = dayOfYear % quotes.length;
    document.getElementById("quote").innerText = quotes[quoteIndex];
}

// Gerar a primeira citação quando a página carregar
window.onload = generateQuote;

// Função para tocar e pausar a música ambiente
function toggleMusic() {
    var audio = document.getElementById("background-music");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
