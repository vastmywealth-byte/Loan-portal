/**
 * ============================================================
 * VastMyWealth Loan Portal — app.js (index.html only)
 * ============================================================
 * Renders the product grid from LOAN_PRODUCTS (products.js) and
 * sends the customer to login.html with the chosen product in
 * the URL, e.g. login.html?product=personal-loan
 */

document.addEventListener('DOMContentLoaded', function () {
  const grid = document.querySelector('.product-grid');
  if (!grid) return;

  LOAN_PRODUCTS.forEach(function (product) {
    const card = document.createElement('a');
    card.href = 'login.html?product=' + encodeURIComponent(product.id);
    card.className = 'product-card';
    card.innerHTML =
      '<div class="product-icon">' +
        '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          product.icon +
        '</svg>' +
      '</div>' +
      '<h3>' + product.name + '</h3>' +
      '<span class="product-select-link">Apply now' +
        '<svg class="arrow-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>' +
      '</span>';
    grid.appendChild(card);
  });
});
