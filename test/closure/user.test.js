import { User, Admin } from '../../src/user.js';
import { expect } from '@bundled-es-modules/chai';

context('Solution: closure', () => {
  let userLike;

  const shouldBehaveLikeAUser = (firstName, lastName) => {

    it('should have .name.first', () => {
      expect(userLike.name.first).to.equal(firstName);
    });

    it('should have .name.last', () => {
      expect(userLike.name.last).to.equal(lastName);
    });

    describe('.fullname()', () => {
      it('should return the full name', () => {
        expect(userLike.fullname()).to.equal(`${firstName} ${lastName}`);
      });
    });
  };

  describe('User', () => {
    const firstName = 'tobi';
    const lastName = 'holowachuk';

    beforeEach(() => {
      userLike = new User(firstName, lastName);
    });

    shouldBehaveLikeAUser(firstName, lastName);
  });

  describe('Admin', () => {
    const firstName = 'foo';
    const lastName = 'bar';
  
    beforeEach(() => {
      userLike = new Admin(firstName, lastName);
    });

    shouldBehaveLikeAUser(firstName, lastName);

    it('should be an .admin', () => {
      expect(userLike.admin).to.be.true;
    });
  });
});
