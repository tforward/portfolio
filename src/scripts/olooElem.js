// ======================================================================
// Element Delegator
// ======================================================================

export function ElementDelegator(proto = null) {
  // This is the base Delegator "Class" for a element
  // By default does not inherirt the proto chain from another object
  const Element = Object.create(proto);
  // Use "create" for creating a new element
  Element.create = function create(elemId, type) {
    this.elem = document.createElement(type);
    this.elem.id = elemId;
    this.id = elemId;
    this.toggle = 0;
    Element.gc(["init", "create"]);
  };
  // Use "init" when working with an existing element
  Element.init = function init(elemId) {
    this.id = elemId;
    this.elem = document.getElementById(this.id);
    if (this.elem === null) {
      console.log(`Init Error: No element with id "${this.id}"`);
    }
    // After creation garbage collected init/create
    Element.gc(["init", "create"]);
  };
  // Garbage Collect
  Element.gc = function gc(items) {
    items.forEach(item => {
      delete Element[item];
    });
    // Delete gc itself
    delete Element.gc;
  };
  return Element;
}

// ======================================================================
// Delegated Element Utilities
// ======================================================================

export function initElemObjects(ids, delegator, proto = null) {
  // Used for quickly initiating Element delegated objects
  // Can accept another proto delegator
  const objs = [];
  let obj;
  ids.forEach(id => {
    if (proto === null) {
      obj = delegator();
    } else {
      obj = delegator(proto());
    }
    obj.init(id);
    objs.push(obj);
  });
  return objs;
}

export function FragmentDelegator(proto = null) {
  const Fragment = Object.create(proto);

  Fragment.initFragment = function initFragment() {
    this.fragment = document.createDocumentFragment();
  };
  Fragment.addNodes = function addNodes(items) {
    items.forEach(item => this.fragment.appendChild(item.elem));
  };
  return Fragment;
}
