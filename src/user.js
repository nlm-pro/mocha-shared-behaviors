export function User(first, last) {
  this.name = {
    first: first,
    last: last
  };
}

User.prototype.fullname = function() {
  return this.name.first + ' ' + this.name.last;
};

export function Admin(first, last) {
  User.call(this, first, last);
  this.admin = true;
}

Admin.prototype.__proto__ = User.prototype;
