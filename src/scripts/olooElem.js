// ======================================================================
// Element
// ======================================================================

export function ElemDelegator(state) {
  const Content = Object.create(null);

  Content.addHtml = function addHtml(parent) {
    parent.insertAdjacentHTML("beforeend", state);
    return parent.lastChild;
  };

  return Content;
}

// ======================================================================
//  Element Utilities
// ======================================================================

export function FragmentDelegator() {
  const FragmentDele = Object.create(null);

  FragmentDele.addElem = function addElem(items) {
    // items: Array of either HTMLElements, other fragments with contents, or
    // an Object with a "elem" property with a HTMLElement inside

    const fragment = document.createDocumentFragment();
    items.forEach(item => {
      if (item.constructor.name === "DocumentFragment" || item.constructor.name.match(/HTML\w*Element/) != null) {
        fragment.appendChild(item);
      } else {
        fragment.appendChild(item.elem);
      }
    });
    return fragment;
  };
  return FragmentDele;
}
