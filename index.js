const brain = require('brain.js');

const network = new brain.NeuralNetwork();

// input:
// weight in grams

// output:
// rh reverse holofoil
// h holofoil
// s secret
// u ultra

network.train([
  { input: [21.8], output: { rh: 1, h: 1, s: 0, u: 0} },
  { input: [21.8], output: { rh: 1, h: 1, s: 0, u: 0} },
  { input: [21.8], output: { rh: 1, h: 1, s: 0, u: 0} },
  { input: [21.8], output: { rh: 1, h: 0, s: 0, u: 1} },
  { input: [21.8], output: { rh: 1, h: 0, s: 0, u: 0} },
  { input: [21.7], output: { rh: 1, h: 0, s: 1, u: 0} },
  { input: [21.8], output: { rh: 1, h: 0, s: 0, u: 0} },
  { input: [21.7], output: { rh: 1, h: 1, s: 0, u: 0} },
  { input: [21.7], output: { rh: 1, h: 1, s: 0, u: 0} },
  { input: [21.7], output: { rh: 1, h: 0, s: 0, u: 0} },
  { input: [21.7], output: { rh: 1, h: 0, s: 0, u: 1} },
  { input: [21.6], output: { rh: 1, h: 0, s: 0, u: 1} },
  { input: [21.8], output: { rh: 1, h: 0, s: 0, u: 0} },
  { input: [21.8], output: { rh: 1, h: 0, s: 0, u: 0} },
  { input: [21.7], output: { rh: 1, h: 0, s: 0, u: 0} },
  { input: [21.7], output: { rh: 1, h: 0, s: 1, u: 0} },
  { input: [21.7], output: { rh: 1, h: 1, s: 0, u: 0} }
]);

var input = 21.7;
const output = network.run([input]);

console.log(`Input: ${input}\nProb: \nrh: ${output.rh} \nh: ${output.h} \ns: ${output.s} \nu: ${output.u}`);
