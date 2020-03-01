
export  default {
  throttle(fn, delayTime) {
    let canRun = true;
    return function() {
      if (!canRun) return;
      canRun = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        canRun = true;
      }, delayTime * 1000)
    }
  }
}