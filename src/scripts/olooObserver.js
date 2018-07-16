// ======================================================================
// Observer Delegator Pattern
// ======================================================================

export function SubscribersDelegator() {
  const Subscribe = Object.create(null);

  Subscribe.init = function init() {
    this.obj = Object.create(null);
    delete Subscribe.init;
  };
  Subscribe.subscribe = function subscribe(id, data) {
    if (this.obj[id] === undefined) {
      this.obj[id] = data;
    } else {
      this.obj[id].push(data);
    }
  };

  Subscribe.unsubscribe = function unsubscribe(items) {
    // Can unsubscribe one observer, or an array of observers
    if (typeof items === "string") {
      const item = items;
      delete this.obj[item];
    } else {
      items.forEach(key => delete this.obj[key]);
    }
  };
  Subscribe.broadcast = function broadcast(func, ...args) {
    // On each object called func
    // Any additional args will get passed into the func
    // define them just using comma seperator
    const keys = Object.keys(this.obj);
    for (let i = 0; i < keys.length; i += 1) {
      this.obj[keys[i]][func](...args);
    }
  };
  return Subscribe;
}
