import { getById } from './api';

jest.mock('./db', () => {
  const { nextId } = require('@mod-bound-issue/libs/utils');
  const testData = [{ id: 1, name: 'John' }];
  return {
    __esModule: true,
    data: [...testData, { id: nextId(testData), name: 'Jane' }],
  };
});

describe('api', () => {
  it('should return the correct user when given an id', () => {
    expect(getById(1)).toEqual({ id: 1, name: 'John' });
    expect(getById(2)).toEqual({ id: 2, name: 'Jane' });
  });
});
