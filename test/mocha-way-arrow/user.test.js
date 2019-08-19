import { User } from '../../src/user.js';
import { shouldBehaveLikeAUser } from './helpers.js';

describe('shared behaviors - the Mocha way but w/ lambdas', () => {
  describe('User', () => {
    let user;

    beforeEach(() => {
      user = new User('tobi', 'holowaychuk');
    });

    shouldBehaveLikeAUser(user);
  });
});
