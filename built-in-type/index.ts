// build in data type: number, string, boolean, void, undefined, null

let userId: number;
let firstName: string;
let lastName: string;
let fullName: string;
let isActived: boolean;

userId = 101;
firstName = "Md.";
lastName = "Mohon";
fullName = firstName.concat(lastName);
isActived = true;

console.log(
  `Your Id: ${userId}, fullName: ${fullName}, isActive: ${isActived}`
);

function display(): void {
  console.log("hi am display!");
}

display();
