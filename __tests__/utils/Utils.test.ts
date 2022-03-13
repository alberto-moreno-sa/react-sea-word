import { Util } from 'utils';

describe('Util', () => {
  describe('isEqualJSON', () => {
    it('returns false if length does not match', () => {
      const a = { foo: 'foo', test: 'test' };
      const b = { test: 'test', foo: 'foo', more: 'more' };

      expect(Util.isEqualJSON(a, b)).toBe(false);
    });

    it('returns false if have difference on keys objects', () => {
      const a = { foo: 'foo', test: 'test' };
      const b = { test: 'test', difference: 'difference' };

      expect(Util.isEqualJSON(a, b)).toBe(false);
    });

    it('returns false if have difference on values', () => {
      const a = { foo: 'foo', test: 'test', hello: { key: 5 } };
      const b = { test: 'test', foo: 'foo', hello: { key: 'difference' } };

      expect(Util.isEqualJSON(a, b)).toBe(false);
    });

    it('returns true if two objects have same properties', () => {
      const a = { foo: 'foo', test: 'test', hello: { key: 'foo' } };
      const b = { test: 'test', foo: 'foo', hello: { key: 'foo' } };

      expect(Util.isEqualJSON(a, b)).toBe(true);
    });
    it('returns false if one param is not object', () => {
      const a = { foo: 'foo', test: 'test', hello: { key: 'foo' } };
      const b = undefined;

      expect(Util.isEqualJSON(a, b)).toBe(false);
    });
  });
});
