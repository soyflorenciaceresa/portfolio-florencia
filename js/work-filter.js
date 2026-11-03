document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.work-filter');
  const items = document.querySelectorAll('.work-item');
  const heading = document.querySelector('.work-heading');

  if (!buttons.length) return;

  const apply = (active) => {
    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === active)));
    items.forEach((item) => {
      item.hidden = item.dataset.category !== active;
    });
    if (heading && heading.dataset[active]) heading.textContent = heading.dataset[active];
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => apply(button.dataset.filter));
  });

  apply('product');
});
