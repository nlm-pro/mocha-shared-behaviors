import { User } from '../../src/user.js';
import { shouldBehaveLikeAUser } from './helpers.js';

context('Solution: all-in-one', () => {
  describe('User', () => {
    shouldBehaveLikeAUser(() => new User('tobi', 'holowaychuk'), {
      firstName: 'tobi',
      lastName: 'holowaychuk',
      fullname: 'tobi holowaychuk'
    });
  });
});
