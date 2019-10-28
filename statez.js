const { Machine } = require('./node_modules/xstate/dist/xstate');


const switchy = Machine({
  id: 'switchy',

  initial: 'switched_off',

  states: {
    switched_off: {
      on: {
        SWITCH_ON: 'switched_on',
      },
    },

    switched_on: {
      on: {
        SWITCH_OFF: 'switched_off',
      },
    },
  },
});


const switchy_0 = switchy.initialState;
const switchy_1 = switchy.transition(switchy_0, { type: 'SWITCH_ON' });
const switchy_2 = switchy.transition(switchy_1, { type: 'SWITCH_OFF' });
const switchy_3 = switchy.transition(switchy_1, { type: 'SWITCH_OFF' });

console.log(switchy_0.value);  // off
console.log(switchy_1.value);  // on
console.log(switchy_2.value);  // off
console.log(switchy_3.value);  // still off

