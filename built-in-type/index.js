// build in data type: number, string, boolean, void, undefined, null
var userId;
var firstName;
var lastName;
var fullName;
var isActived;
userId = 101;
firstName = "Md.";
lastName = "Mohon";
fullName = firstName.concat(lastName);
isActived = true;
console.log("Your Id: ".concat(userId, ", fullName: ").concat(fullName, ", isActive: ").concat(isActived));
function display() {
    console.log("hi am display!");
}
display();
