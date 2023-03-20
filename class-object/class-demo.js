var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.display = function () {
        console.log("userName: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var userOne = new User("Anisul Islam", 23);
userOne.display();
