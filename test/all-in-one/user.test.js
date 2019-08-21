import { User } from '../../src/user.js';
import { shouldBehaveLikeAUser } from './helpers.js';

context('Solution: all-in-one', () => {

  describe('User', () => {
    shouldBehaveLikeAUser(User);
  });
  
});
