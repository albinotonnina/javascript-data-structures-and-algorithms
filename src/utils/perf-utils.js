const {performance} = require('perf_hooks');
// import colors from 'colors'

export const displayPerfTime = (testName, fn) => {
  const t0 = performance.now();
  fn();
  const t1 = performance.now();

  const roundedTime = (t1 - t0).toFixed(4);

  console.log(`⏱ 🚀 Call to ${testName} took ${roundedTime}ms`);
};
