import animateAccordion from '../animations/animations.js';

class AccordionView {
  constructor(accordions) {
    this.accordions = accordions;
  }

  static createAccordionAnimation({ accordion, callback }) {
    const accordionSummary = accordion.firstElementChild;
    accordionSummary.addEventListener('click', callback);
  }

  addAccordionAnimation() {
    this.accordions.forEach((accordion) =>
      AccordionView.createAccordionAnimation({
        accordion,
        callback: animateAccordion,
      }),
    );
  }
}

export default AccordionView;
