function $(selector, node = document) {
  return node.querySelector(selector);
}

function $$(selector, node = document) {
  return [...node.querySelectorAll(selector)];
}

export { $, $$ };
