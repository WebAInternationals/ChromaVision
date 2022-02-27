import { matrixToString } from './matrixToString';
import { add, subtract, multiply } from 'mathjs';
import { cvdFilter } from '../filters/cvd';
import injectScript from './injectScript';

export async function deuteranopia(option, contrast) {
  const identity = [
    [1, 0, 0],
    [0, 1, 0],
    [0, 0, 1],
  ];

  const deuteranopia = [
    [0.292746395668271, 0.707241249103522, 0.000000156558466],
    [0.292750943335557, 0.707252206989406, -0.000000220239329],
    [-0.02233651301108, 0.022336649609041, 1.000002309415585],
  ];

  let matrix;

  if (option === 0) {
    matrix = matrixToString(deuteranopia);
  } else {
    const error = [
      [0, 0, 0],
      [contrast, 1, 0],
      [contrast, 0, 1],
    ];

    const filter = add(
      identity,
      multiply(error, subtract(identity, deuteranopia))
    );

    if (option === 1) {
      matrix = matrixToString(filter);
    } else {
      matrix = matrixToString(multiply(deuteranopia, filter));
    }
  }

  injectScript(cvdFilter, matrix, 'deuteranopia');
}
