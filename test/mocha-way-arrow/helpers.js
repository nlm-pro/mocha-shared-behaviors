import { expect } from '@bundled-es-modules/chai';

export function shouldBehaveLikeAUser(user) {
  it('should have .name.first', () => {
    expect(user.name.first).to.equal('tobi');
  });
};
