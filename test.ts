/* eslint-disable prettier/prettier */
function identity<e>(arg: e): e {
  return arg;
}

const output = identity({ 0: 0 });

const output2 = identity('sdgsdg');
console.log(output, output2);
