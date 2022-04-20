const accordionCollection = document.querySelectorAll(
  '.accordion-container__summary',
);

accordionCollection.forEach((accordionSummary) => {
  // Smooth accordion animation: https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css
  accordionSummary.addEventListener('click', (e) => {
    accordionSummary.classList.toggle('open');
    // .accordion-container__content
    const accordionContent = e.target.nextElementSibling;
    // .accordion-container__description
    const [accordionDescription] = accordionContent.children;
    const { clientHeight: descriptionHeight } = accordionDescription;
    accordionContent.style.height = accordionContent.clientHeight
      ? 0
      : `${descriptionHeight}px`;
  });
});
