import { User } from '../../src/user.js';
import { expectUserLike } from './helpers.js';

context('Solution: one by one', () => {
  let user = 'foo';
  const firstname = 'tobi';
  const lastname = 'holowaychuk';

  describe('User', () => {
    beforeEach(() => {
      user = new User(firstname, lastname);
    });

    it('should have .name.first', () => {
      expectUserLike(user).toHaveNameFirstAs(firstname);
    });

    it('should have .name.last', () => {
      expectUserLike(user).toHaveNameLastAs(lastname);
    });

    describe('.fullname()', () => {
      it('should return the full name', () => {
        expectUserLike(user).toHaveFullnameThatReturnAs(`${firstname} ${lastname}`);
      });
    });

  });
});
