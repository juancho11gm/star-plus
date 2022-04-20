import AccordionView from './views/accordion.js';

const accordionCollection = document.querySelectorAll('.accordion-container');
const accordionView = new AccordionView(accordionCollection);
accordionView.addAccordionAnimation();
