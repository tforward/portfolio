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
    Element.props(elemId);
    Element.gc(["init", "create"]);
  };
  // Use "init" when working with an existing element
  Element.init = function init(elemId) {
    this.elem = document.getElementById(elemId);
    if (this.elem === null) {
      console.log(`Init Error: No element with id: "${elemId}"`);
    }
    Element.props(elemId);
    // After creation garbage collected init/create
    Element.gc(["init", "create"]);
  };
  Element.props = function props(elemId) {
    this.id = elemId;
    this.toggle = 0;
  };
  // Garbage Collect
  // After a element is created or init we can delete these properties as
  // they will no longer be used in the life cycles of the Element
  Element.gc = function gc(items) {
    items.forEach(item => {
      delete Element[item];
    });
    // Delete gc itself
    // delete Element.gc;
  };
  return Element;
}

// ======================================================================
// Delegated Element Utilities
// ======================================================================

export function initElemObjects(ids, elemType, delegator, proto = null, create = true) {
  // Used for quickly initiating Element delegated objects
  //  delegator: The delegator to assign to the returned object
  //  proto: [Optional] The prototype to give the object
  //  Can accept another proto delegator
  //  Typically good idea to assign the return object to the Subscribers.addObjs property
  const objs = [];
  let obj;
  ids.forEach(id => {
    if (proto === null) {
      obj = delegator();
    } else {
      obj = delegator(proto());
    }
    if (create) {
      obj.create(id, elemType);
    } else {
      obj.init(id);
    }
    objs[id] = obj;
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
