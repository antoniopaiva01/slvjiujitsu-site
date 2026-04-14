// 1. Função de Scroll Suave E Fechar Menu no Celular
function scrollToSection(id) {
  // Rola até a seção
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  
  // Se o menu de celular estiver aberto, ele fecha automaticamente ao clicar
  document.getElementById('nav-links').classList.remove('active');
  document.getElementById('hamburger').classList.remove('active');
}

// 2. Função do Menu Hambúrguer (Abre/Fecha)
function toggleMenu() {
  document.getElementById('nav-links').classList.toggle('active');
  document.getElementById('hamburger').classList.toggle('active');
}

// 3. Lógica das Abas de Modalidades (Tabs)
function openTab(evt, tabName) {
  let i, tabcontent, tablinks;
  
  // Esconde todos os textos/imagens das abas
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].classList.remove("active");
  }
  
  // Remove a cor verde (active) de todos os botões
  tablinks = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  
  // Mostra a aba clicada e pinta o botão clicado de verde
  document.getElementById(tabName).classList.add("active");
  evt.currentTarget.classList.add("active");
}

// 4. Animação de Scroll (Intersection Observer)
const reveals = document.querySelectorAll('.reveal');

const revealOptions = {
  threshold: 0.15,
  rootMargin: "0px 0px -50px 0px"
};

const revealOnScroll = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}, revealOptions);

reveals.forEach(reveal => {
  revealOnScroll.observe(reveal);
});
// 5. Lógica do FAQ (Accordion)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    // Alterna a classe active no botão (para girar o ícone)
    question.classList.toggle('active');
    
    // Pega a div da resposta que está logo abaixo do botão
    const answer = question.nextElementSibling;
    
    // Se a resposta estiver aberta, ele fecha. Se estiver fechada, ele abre com a altura exata do texto
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + "px";
    }
  });
});
// 6. Preloader Futurista (A tela derrete após 1 segundo)
window.addEventListener('load', function() {
  setTimeout(function() {
    document.getElementById('preloader').classList.add('hide');
  }, 1000); 
});
// =========================================
// EFEITOS EXPERT
// =========================================

// 7. Cursor Lanterna (Glow Tracking)
const cursorGlow = document.getElementById('cursor-glow');

// Só ativa a lanterna se o cara estiver usando PC (com mouse). No celular desativa para não bugar.
if (window.matchMedia("(pointer: fine)").matches) {
  document.addEventListener('mousemove', (e) => {
    // A luz segue as coordenadas exatas do mouse na tela
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
  });
}

// 8. Efeito 3D nas Cartas (Tilt Effect nas fotos dos Campeões)
const cards = document.querySelectorAll('.floating-gallery img');

cards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    // Pega o tamanho e posição exata da foto
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; 
    const y = e.clientY - rect.top;  
    
    // Descobre o centro da foto
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calcula o quanto a carta deve "entortar" baseado em onde o mouse está
    const rotateX = ((y - centerY) / centerY) * -15; // Inclina para cima/baixo (Máx 15 graus)
    const rotateY = ((x - centerX) / centerX) * 15;  // Inclina para os lados
    
    // Aplica o 3D + a cor verde do Hover
    card.style.transform = `scale(1.05) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    card.style.filter = "grayscale(0%) brightness(1.1)";
    card.style.borderColor = "var(--green)";
    card.style.boxShadow = "0 20px 40px rgba(0, 255, 136, 0.4)";
    card.style.zIndex = "20";
  });
  
  // Quando o mouse sai da foto, ela volta ao normal suavemente
  card.addEventListener('mouseleave', () => {
    card.style.transform = "";
    card.style.filter = "";
    card.style.borderColor = "";
    card.style.boxShadow = "";
    card.style.zIndex = "";
  });
});