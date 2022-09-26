import { $$ } from '../../utils/dom';
import { animateAccordion } from './Accordion.animations';

class AccordionView {
  constructor(accordion) {
    this.accordions = $$('.accordion-container', accordion);
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

export { AccordionView };
