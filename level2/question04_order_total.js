const order = {
  items: [
    { name: "Wireless Mouse", price: 29.99, quantity: 2 },
    { name: "USB-C Cable", price: 12.50, quantity: 3 },
    { name: "Desk Mat", price: 19.95, quantity: 1 }
  ],

  calculateTotal() {
    return this.items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  }
};

console.log("Order Items:");
for (const item of order.items) {
  const itemTotal = item.price * item.quantity;
  console.log(`- ${item.name}: $${item.price.toFixed(2)} x ${item.quantity} = $${itemTotal.toFixed(2)}`);
}

const grandTotal = order.calculateTotal();
console.log(`\nTotal Order Cost: $${grandTotal.toFixed(2)}`);
