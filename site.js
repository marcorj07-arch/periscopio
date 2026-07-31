    function toggleMenu() {
      const nav = document.getElementById('mobileNav');
      const btn = document.querySelector('.menu-toggle');
      const isOpen = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', isOpen);
      btn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    }

    function closeMenu() {
      const nav = document.getElementById('mobileNav');
      const btn = document.querySelector('.menu-toggle');
      nav.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
      btn.setAttribute('aria-label', 'Abrir menu');
    }

    function toggleFaq(button) {
      const item = button.closest('.faq-item');
      const wasActive = item.classList.contains('active');
      document.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!wasActive) {
        item.classList.add('active');
        button.setAttribute('aria-expanded', 'true');
      }
    }

    function sendWhatsApp(event) {
      event.preventDefault();
      const nome = document.getElementById('nome').value;
      const especialidade = document.getElementById('especialidade').value;
      const faturamento = document.getElementById('faturamento').value;
      const mensagem = document.getElementById('mensagem').value;

      const texto = `Olá, sou ${nome || 'profissional da saúde'}${especialidade ? ` (${especialidade})` : ''} e quero solicitar a análise tributária.${faturamento ? ` Faturamento mensal aproximado: ${faturamento}.` : ''}${mensagem ? ` ${mensagem}` : ''}`;

      window.open(`https://wa.me/5561993718806?text=${encodeURIComponent(texto)}`, '_blank', 'noopener');
    }
