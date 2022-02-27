import { matrixToString } from './matrixToString';
import { add, subtract, multiply } from 'mathjs';
import { cvdFilter } from '../filters/cvd';
import injectScript from './injectScript';

export async function protanopia(option, contrast) {
  const identity = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  const protanopia = [
    [0.112374034375747, 0.887558386184331, -0.000322191533739],
    [0.112384307881637, 0.887626591547437, 0.000040741463614],
    [0.0040058048304, -0.004005514116495, 1.000003745492456],
  ];

  let matrix;

  if (option === 0) {
    matrix = matrixToString(protanopia);
  } else {
    const error = [
      [0, 0, 0],
      [contrast, 1, 0],
      [contrast, 0, 1],
    ];

    const filter = add(
      identity,
      multiply(error, subtract(identity, protanopia))
    );

    if (option === 1) {
      matrix = matrixToString(filter);
    } else {
      matrix = matrixToString(multiply(protanopia, filter));
    }
  }

  injectScript(cvdFilter, matrix, 'protanopia');
}
