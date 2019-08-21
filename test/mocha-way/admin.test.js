import { Admin } from '../../src/user.js';
import { shouldBehaveLikeAUser } from './helpers.js';
import { expect } from '@bundled-es-modules/chai';

context('Solution: the Mocha way', function() {
  describe('Admin', function() {
    beforeEach(function() {
      this.user = new Admin('tobi', 'holowaychuk');
    });

    shouldBehaveLikeAUser();

    it('should be an .admin', function() {
      expect(this.user.admin).to.be.true;
    });
  });
});
