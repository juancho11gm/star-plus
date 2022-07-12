import { toggleElementOnScroll } from '../../utils/toggleElementOnScroll';

class PlansView {
  constructor(plans, navbarContent) {
    this.plans = plans.firstChild;
    this.navbarContent = navbarContent;
  }

  addScrollAnimation() {
    window.addEventListener('scroll', () => {
      toggleElementOnScroll({
        observedElement: this.plans,
        target: this.navbarContent,
      });
    });
  }
}

export { PlansView };
