// Seleciona o botão e o card de ruínas
const botao = document.getElementById('btn-mudar-realidade');
const cenarioRuinas = document.querySelector('.cenario-ruinas');
const textoLimbo = document.querySelector('.texto-limbo');

let realidadeAlterada = false;

botao.addEventListener('click', () => {
    if (!realidadeAlterada) {
        // Transforma o cenário de ruínas em algo vivo (Equilíbrio)
        cenarioRuinas.style.borderColor = '#39ff14';
        cenarioRuinas.style.background = 'rgba(30, 50, 30, 0.9)';
        cenarioRuinas.querySelector('h2').innerText = "O Brasil que podemos florescer!";
        cenarioRuinas.querySelector('p').innerText = "As árvores voltam a respirar, o solo se recupera. O agro forte protege o que é nosso por direito: a nossa biodiversidade.";
        
        // Altera o espaço da imagem surrealista
        textoLimbo.innerText = "[IMAGEM: Campos verdes e florestas tropicais em perfeita harmonia]";
        textoLimbo.style.color = '#39ff14';
        
        // Muda o texto do botão
        botao.innerText = "Realidade Sincronizada";
        botao.style.borderColor = '#aaa';
        botao.style.color = '#aaa';
        
        realidadeAlterada = true;
    } else {
        // Reseta para o estado inicial (efeito de loop dreamcore)
        cenarioRuinas.style.borderColor = '#ff3333';
        cenarioRuinas.style.background = 'rgba(20, 25, 20, 0.9)';
        cenarioRuinas.querySelector('h2').innerText = "O Brasil que se esvai...";
        cenarioRuinas.querySelector('p').innerText = "Campos secos, céus de fumaça cinzenta. Sem o manejo sustentável, o futuro vira uma foto antiga e borrada. Você consegue ouvir o silêncio da terra?";
        
        textoLimbo.innerText = "[IMAGEM: Ipê amarelo seco sob um céu distorcido]";
        textoLimbo.style.color = '#777';
        
        botao.innerText = "Restaurar o Equilíbrio";
        botao.style.borderColor = '#39ff14';
        botao.style.color = '#39ff14';
        
        realidadeAlterada = false;
    }
});