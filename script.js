// script.js - Efeito de surgimento dos elementos da direita para esquerda

// Configurações do IntersectionObserver
const observerOptions = {
  root: null,              // usa a viewport como referência
  rootMargin: '0px',       // sem margens na viewport
  threshold: 0.1           // dispara quando 10% do elemento está visível
};

// Criar o Observer que detecta quando elementos entram na viewport
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    // Se o elemento está visível na viewport
    if (entry.isIntersecting) {
      // Adiciona a classe que ativa o efeito de surgimento
      entry.target.classList.add('surge-active');
      
      // Opcional: parar observando após o efeito (melhora performance)
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Aplicar o observer a todos os elementos com a classe 'surge-from-right'
document.querySelectorAll('.surge-from-right').forEach(element => {
  observer.observe(element);
});