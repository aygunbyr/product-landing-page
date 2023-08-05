const faqItemElements = document.querySelectorAll('.faq-item');

function toggleActive(element) {
  faqItemElements.forEach((el) => el.classList.remove('active'));
  element.classList.toggle('active');
}

faqItemElements.forEach((faqItem) => {
  faqItem.addEventListener('click', function () {
    toggleActive(faqItem);
  });
});
