import { expect } from '@bundled-es-modules/chai';

export function shouldBehaveLikeAUser(constructor) {
  let userLike;
  const firstName = 'tobi';
  const lastName = 'holowachuk';

  context(`when using new ${constructor.name}(${firstName}, ${lastName})`, () => {
    beforeEach(() => {
      userLike = new constructor(firstName, lastName);
    });
    
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
  })
}
