import { User } from '../../src/user.js';
import { shouldBehaveLikeAUser } from './helpers.js';

context('Solution: context w/ lambdas fails', () => {
  describe('User', () => {
    let user;

    beforeEach(() => {
      user = new User('tobi', 'holowaychuk');
    });

    shouldBehaveLikeAUser(user);
  });
});
