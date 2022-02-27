import { matrixToString } from './matrixToString';
import { add, subtract, multiply } from 'mathjs';
import { cvdFilter } from '../filters/cvd';
import injectScript from './injectScript';

export async function tritanopia(option, contrast) {
  const identity = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  const tritanopia = [
    [1.0, 0.15236, -0.15236],
    [0.0, 0.86717, 0.13283],
    [-0.0, 0.86717, 0.13283],
  ];

  let matrix;

  if (option === 0) {
    matrix = matrixToString(tritanopia);
  } else {
    const error = [
      [1, 0, contrast],
      [0, 1, contrast],
      [0, 0, 0],
    ];

    const filter = add(
      identity,
      multiply(error, subtract(identity, tritanopia))
    );

    if (option === 1) {
      matrix = matrixToString(filter);
    } else {
      matrix = matrixToString(multiply(tritanopia, filter));
    }
  }

  injectScript(cvdFilter, matrix, 'tritanopia');
}
