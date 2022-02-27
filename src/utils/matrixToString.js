export const matrixToString = (m) => {
  console.log('matrixToString');
  let string = '';
  for (let row of m) {
    console.log('row = ' + row);
    string = string + row;
    string = string + ',0,0 ';
  }

  // console.log('string = ' + string);
  string += '0,0,0,1,0';
  return string;
};
