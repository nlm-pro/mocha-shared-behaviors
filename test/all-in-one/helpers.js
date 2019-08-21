import { expect } from '@bundled-es-modules/chai';

export function shouldBehaveLikeAUser(generateUser, { firstName, lastName, fullname }) {
  let userLike;

  beforeEach(() => {
    userLike = generateUser();
  });
  
  it('should have .name.first', () => {
    expect(userLike.name.first).to.equal(firstName);
  });
  
  it('should have .name.last', () => {
    expect(userLike.name.last).to.equal(lastName);
  });
  
  describe('.fullname()', () => {
    it('should return the full name', () => {
      expect(userLike.fullname()).to.equal(fullname);
    });
  });
}
