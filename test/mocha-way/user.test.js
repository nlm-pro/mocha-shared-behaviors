import { User } from '../../src/user.js';
import { shouldBehaveLikeAUser } from './helpers.js';

context('Solution: the Mocha way', function() {
  describe('User', function() {
    beforeEach(function() {
      this.user = new User('tobi', 'holowaychuk');
    });

    shouldBehaveLikeAUser();
  });
});
