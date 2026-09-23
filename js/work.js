document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const items = document.querySelectorAll('.work-item');

  function applyFilter(category) {
    let visibleIndex = 0;
    items.forEach((item) => {
      const matches = category === 'all' || item.dataset.category === category;
      item.classList.toggle('is-hidden', !matches);
      if (matches) {
        visibleIndex += 1;
        item.querySelector('.work-number').textContent = String(visibleIndex).padStart(3, '0');
      }
    });
  }

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      buttons.forEach((b) => b.classList.remove('active'));
      button.classList.add('active');
      applyFilter(button.dataset.filter);
    });
  });

  applyFilter('all');
});
