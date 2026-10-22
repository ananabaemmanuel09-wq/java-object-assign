const cart = {
  items: [],

  addProduct(product) {
    const existingItem = this.items.find((item) => item.id === product.id);

    if (existingItem) {
      existingItem.quantity += product.quantity;
    } else {
      this.items.push({ ...product });
    }
  },

  removeProduct(productId) {
    this.items = this.items.filter((item) => item.id !== productId);
  },

  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price * item.quantity, 0);
  }
};

cart.addProduct({ id: 101, name: "Mechanical Keyboard", price: 89.99, quantity: 1 });
cart.addProduct({ id: 102, name: "Wireless Mouse", price: 49.50, quantity: 1 });
console.log("Cart after adding 2 products:");
console.log(cart.items);

cart.addProduct({ id: 101, name: "Mechanical Keyboard", price: 89.99, quantity: 2 });
console.log("\nCart after adding existing product ID 101 again (+2 quantity):");
console.log(cart.items);

cart.removeProduct(102);
console.log("\nCart after removing product ID 102:");
console.log(cart.items);

const finalTotal = cart.calculateTotal();
console.log(`\nFinal Cart Total: $${finalTotal.toFixed(2)}`);
