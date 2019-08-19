import { User, Admin } from '../../src/user.js';
import { expectUserLike } from './helpers.js';
import { expect } from '@bundled-es-modules/chai';

describe('shared behaviors - one by one', () => {
  let user = 'foo';
  const constructorArgs = ['tobi', 'holowaychuk'];

  describe('User', () => {
    beforeEach(() => {
      user = new User(...constructorArgs);
    });

    it('should have .name.first', () => {
      expectUserLike(user).toHaveNameFirstAs(constructorArgs[0]);
    });

    it('should have .name.last', () => {
      expectUserLike(user).toHaveNameLastAs(constructorArgs[1]);
    });

    describe('.fullname()', () => {
      it('should return the full name', () => {
        expectUserLike(user).toHaveFullnameThatReturnAs(...constructorArgs);
      });
    });

  });

  describe('Admin', () => {
    beforeEach(() => {
      user = new Admin(...constructorArgs);
    });

    it('should have .name.first', () => {
      expectUserLike(user).toHaveNameFirstAs(constructorArgs[0]);
    });

    it('should have .name.last', () => {
      expectUserLike(user).toHaveNameLastAs(constructorArgs[1]);
    });

    describe('.fullname()', () => {
      it('should return the full name', () => {
        expectUserLike(user).toHaveFullnameThatReturnAs(...constructorArgs);
      });
    });

    it('should be an .admin', () => {
      expect(user.admin).to.be.true;
    });
  });
});
