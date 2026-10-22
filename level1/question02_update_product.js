const product = {
  name: "Mechanical Keyboard",
  price: 79.99,
  stock: 15
};

console.log("Original Product:");
console.log(product);

product.price = 64.99;
product.stock += 5;

console.log("\nChanges:");
console.log(`Updated Price: $${product.price}`);
console.log(`Updated Stock: ${product.stock} (+5 units)`);

console.log("\nUpdated Product Object:");
console.log(product);
