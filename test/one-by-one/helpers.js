import { expect } from '@bundled-es-modules/chai';

/**
 * User Like objects Shared Behaviors
 *
 * @param {*} user - the "User Like" object to test
 * @return {function()} expectation
 */
export const expectUserLike = user => ({
  /**
   * test the "user like" object has .name.first property
   * @param {String} expectation - value expected for the name.first field
   */
  toHaveNameFirstAs: expectation => {
    expect(user.name.first).to.equal(expectation);
  },
  /**
   * test the "user like" object has .name.last property
   * @param {String} expectation - value expected for the name.last field
   */
  toHaveNameLastAs: expectation => {
    expect(user.name.last).to.equal(expectation);
  },
  /**
   * test the "user like" object has a fullname method witch returns the user fullname
   * @param {String} expectation - value the fullname method should return
   */
  toHaveFullnameThatReturnAs: expectation => {
    expect(user.fullname()).to.equal(expectation);
  }
});
