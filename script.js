
  (function () {
    const row   = document.getElementById('productRow');
    const left  = document.querySelector('.p-left');
    const right = document.querySelector('.p-right');

    function cardStep() {
      const card = row.querySelector('.p-card');
      if (!card) return 320;
      const gap = parseInt(getComputedStyle(row).gap || '0', 10);
      return card.getBoundingClientRect().width + gap;
    }

    function scrollByCards(n) {
      row.scrollBy({ left: n * cardStep(), behavior: 'smooth' });
    }

    left.addEventListener('click',  () => scrollByCards(-1));
    right.addEventListener('click', () => scrollByCards(1));
  })();



  (function () {
    const row   = document.getElementById('testimonialRow');
    const left  = document.querySelector('.t-left');
    const right = document.querySelector('.t-right');

    function cardStep() {
      const card = row.querySelector('.t-card');
      if (!card) return 280;
      const gap = parseInt(getComputedStyle(row).gap || '0', 10);
      return card.getBoundingClientRect().width + gap;
    }

    function scrollByCards(n) {
      row.scrollBy({ left: n * cardStep(), behavior: 'smooth' });
    }

    left.addEventListener('click',  () => scrollByCards(-1));
    right.addEventListener('click', () => scrollByCards(1));
  })();
