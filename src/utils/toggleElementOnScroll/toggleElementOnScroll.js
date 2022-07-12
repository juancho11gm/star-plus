import constants from '../constants';

const { CLASS_VISIBLE } = constants;

/**
 * "If the user has scrolled past the top of the observed element, add the class visible to the target
 * element, otherwise remove it."
 *
 * The function takes an object as an argument. The object has two properties: observedElement and
 * target. The observedElement property is the element that we want to observe. The target property is
 * the element that we want to toggle the class visible on
 */
function toggleElementOnScroll({ observedElement, target }) {
  const { offsetTop: observedElementOffsetTop } = observedElement;
  const { scrollTop } = document.documentElement;
  if (scrollTop >= observedElementOffsetTop) {
    target.classList.add(CLASS_VISIBLE);
  } else {
    target.classList.remove(CLASS_VISIBLE);
  }
}

export { toggleElementOnScroll };
