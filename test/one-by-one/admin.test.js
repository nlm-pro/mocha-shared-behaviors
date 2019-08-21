import { Admin } from '../../src/user.js';
import { expectUserLike } from './helpers.js';
import { expect } from '@bundled-es-modules/chai';

context('Solution: one by one', () => {
  let user = 'foo';
  const firstname = 'tobi';
  const lastname = 'holowaychuk';

  describe('Admin', () => {
    beforeEach(() => {
      user = new Admin(firstname, lastname);
    });

    it('should have .name.first', () => {
      expectUserLike(user).toHaveNameFirstAs(firstname);
    });

    it('should have .name.last', () => {
      expectUserLike(user).toHaveNameLastAs(lastname);
    });

    describe('.fullname()', () => {
      it('should return the full name', () => {
        expectUserLike(user).toHaveFullnameThatReturnAs(firstname, lastname);
      });
    });

    it('should be an .admin', () => {
      expect(user.admin).to.be.true;
    });
  });
});
