/* ── NAVEGAÇÃO: adiciona sombra ao rolar a página ── */
const navegacao = document.getElementById('navegacao');

window.addEventListener('scroll', () => {
  navegacao.classList.toggle('rolando', window.scrollY > 40);
});

/* ── MENU HAMBÚRGUER (celular) ── */
const botaoMenu  = document.getElementById('botaoMenu');
const menuMobile = document.getElementById('menuMobile');

botaoMenu.addEventListener('click', () => {
  botaoMenu.classList.toggle('aberto');
  menuMobile.classList.toggle('aberto');
});

/* Fecha o menu ao clicar em um link */
function fecharMenuMobile() {
  botaoMenu.classList.remove('aberto');
  menuMobile.classList.remove('aberto');
}

/* ── ANIMAÇÃO DE ENTRADA AO ROLAR ──
   Observa os elementos com classe .revelar
   Quando entram na tela, adiciona a classe .visivel  */
const elementosAnimados = document.querySelectorAll('.revelar');

const observador = new IntersectionObserver((entradas) => {
  entradas.forEach((entrada) => {
    if (entrada.isIntersecting) {
      setTimeout(() => {
        entrada.target.classList.add('visivel');
      }, 80);
      observador.unobserve(entrada.target); /* para de observar após animar */
    }
  });
}, { threshold: 0.12 });

elementosAnimados.forEach(el => observador.observe(el));

/* ── FORMULÁRIO DE CONTATO ──
   Exibe mensagem de confirmação ao enviar */
const formulario = document.getElementById('formularioContato');

if (formulario) {
  formulario.addEventListener('submit', (evento) => {
    evento.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em até 24 horas.');
    formulario.reset();
  });
}