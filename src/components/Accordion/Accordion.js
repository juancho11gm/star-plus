import { $$ } from '../../utils/dom';
import AccordionView from './Accordion.view';
import './Accordion.scss';

const accordionCollection = $$('.accordion-container');
const accordionView = new AccordionView(accordionCollection);
accordionView.addAccordionAnimation();
