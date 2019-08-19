import { User, Admin } from '../../src/user.js';
import { shouldBehaveLikeAUser } from './helpers.js';
import { expect } from '@bundled-es-modules/chai';

describe('shared behaviors - the Mocha way', function() {
  describe('User', function() {
    beforeEach(function() {
      this.user = new User('tobi', 'holowaychuk');
    });

    shouldBehaveLikeAUser();
  });

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
