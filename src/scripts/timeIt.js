"use strict";

// TODO on start function?

// myApp.main = function main() {
//   // All values are in ms
//   timer({ func: changeClock, tick: 1000, tock: 1000, stop: 5000, endFunc: endFunction });
// };

export function timer(args) {
  // Tick: How often in ms to call the function
  // Tock: Duration between ticks in ms, for example
  //       if the tick is 1000ms and the tock is 500ms
  //       means the function will fire twice in 1000ms.
  let { func, tick, tock, time, stop, endFunc, initTime } = args;
  const now = performance.now();
  // The '+= now' is so the times align with perf.now()
  // Otherwise they could be offset, as perf.now() is rarely zero
  timerUtil(func, (tick += now), tock, (time = now), (stop += now), endFunc, (initTime = now));
}

function timerUtil(func, tick, tock, time, stop, endFunc, initTime) {
  // When the Timer stops, optionally can call a function
  // stop + tock will cause one more function call to fire
  if (time >= stop + tock) {
    endFunc();
    console.log(`Accuracte within: ${time - stop - tock} ms`);
    return;
  }
  // Tick Timer ahead by Tock and call the function each time
  if (time >= tick) {
    tick += tock;
    func();
  }

  // Delay next function call
  const diff = time - tick;
  setTimeout(timerUtil.bind(null, func, tick, tock, (time = performance.now()), stop, endFunc, initTime), diff);
}
