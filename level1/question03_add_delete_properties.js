const user = {
  username: "swaray_dev",
  email: "swaray@example.com"
};

console.log("Original User:");
console.log(user);

user.isActive = true;

console.log("\nAfter Adding isActive:");
console.log(user);

delete user.email;

console.log("\nAfter Deleting email:");
console.log(user);
