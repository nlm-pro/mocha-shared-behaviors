import { expect } from '@bundled-es-modules/chai';

export function shouldBehaveLikeAUser() {
  it('should have .name.first', function() {
    expect(this.user.name.first).to.equal('tobi');
  });

  it('should have .name.last', function() {
    expect(this.user.name.last).to.equal('holowaychuk');
  });

  describe('.fullname()', function() {
    it('should return the full name', function() {
      expect(this.user.fullname()).to.equal('tobi holowaychuk');
    });
  });
}
