var users;
users = [];
var user1;
user1 = {
    userName: "md. Mohon",
    userId: 2,
};
users.push(user1);
var user2;
user2 = { userName: "ruhi", userId: 3 };
users.push(user2);
var getRequest;
getRequest = "GET";
function requestHandler(requestType) {
    console.log(requestType);
}
requestHandler("GET");
