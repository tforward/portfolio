// ======================================================================
// Element
// ======================================================================

export function ElemDelegator(state) {
  const Content = Object.create(null);

  Content.createElems = function createElems() {
    Object.keys(state).forEach(key => {
      state[key].elem = document.createElement(state[key].elem);
      // For assigning values to node elements
      Object.keys(state[key]).forEach(i => {
        state[key].elem[i] = state[key][i];
      });
    });
  };
  return Content;
}

// ======================================================================
//  Element Utilities
// ======================================================================

export function FragmentDelegator() {
  const FragmentDele = Object.create(null);

  FragmentDele.addFragments = function addFragments(items) {
    const fragment = document.createDocumentFragment();
    items.forEach(item => fragment.appendChild(item.elem));
    return fragment;
  };
  return FragmentDele;
}
