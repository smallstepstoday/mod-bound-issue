import { nextId } from './utils';

describe('libsUtils', () => {
  it('should work', () => {
    expect(nextId([])).toEqual('libs/utils');
  });
});
