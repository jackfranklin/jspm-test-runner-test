import { expect } from 'chai';
import { describe } from 'jspm-test-runner';
import { add } from '../app/index';

describe('adding', () => {
  expect(add(1, 2)).to.eql(3);
});

describe('should fail', () => {
  expect(add(2, 2)).to.eql(3);
});
