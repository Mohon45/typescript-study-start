let users: Object[];

users = [];

type User = {
  userName: string;
  userId: number;
};
let user1: User;
user1 = {
  userName: "md. Mohon",
  userId: 2,
};
users.push(user1);
let user2: User;

user2 = { userName: "ruhi", userId: 3 };
users.push(user2);

// console.log(users);

type RequestType = "GET" | "POST";
let getRequest: RequestType;
getRequest = "GET";

function requestHandler(requestType: RequestType) {
  console.log(requestType);
}
requestHandler("GET");
