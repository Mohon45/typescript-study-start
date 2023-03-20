class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`userName: ${this.userName}, age: ${this.age}`);
  }
}

let userOne = new User("Anisul Islam", 23);
userOne.display();
