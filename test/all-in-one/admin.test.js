import { Admin } from '../../src/user.js';
import { shouldBehaveLikeAUser } from './helpers.js';
import { expect } from '@bundled-es-modules/chai';

context('Solution: all-in-one', () => {
  describe('Admin', () => {
    shouldBehaveLikeAUser(Admin);

    it('should be an .admin', () => {
      expect(new Admin().admin).to.be.true;
    });
  });
});
