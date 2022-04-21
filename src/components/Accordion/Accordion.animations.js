// Smooth accordion animation: https://stackoverflow.com/questions/3508605/how-can-i-transition-height-0-to-height-auto-using-css

function animateAccordion({ target: accordionSummary }) {
  accordionSummary.classList.toggle('open');
  // .accordion-container__content
  const accordionContent = accordionSummary.nextElementSibling;
  const { clientHeight: contentHeight } = accordionContent;
  // .accordion-container__description
  const [accordionDescription] = accordionContent.children;
  const { clientHeight: descriptionHeight } = accordionDescription;
  accordionContent.style.height = contentHeight ? 0 : `${descriptionHeight}px`;
}

export default animateAccordion;
