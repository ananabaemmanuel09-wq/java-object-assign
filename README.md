# JavaScript Object Project

A clean JavaScript project built with Node.js, implementing eight selected object-oriented problems across four progression levels: Beginner, Intermediate, Upper Intermediate, and Advanced.

---

## Questions by Level

### Level 1 — Beginner: Object Basics
- **Question 2: Update Product Information** (`level1/question02_update_product.js`)  
  Creates a product object, updates price, increments stock by 5, and logs original and updated states.
- **Question 3: Add and Delete Properties** (`level1/question03_add_delete_properties.js`)  
  Creates a user object, dynamically adds `isActive`, and deletes the `email` property.

### Level 2 — Intermediate: Methods and Nested Objects
- **Question 1: Rectangle Calculator** (`level2/question01_rectangle_calculator.js`)  
  Defines a rectangle object with `width`, `height`, and methods `getArea()` and `getPerimeter()` using `this`.
- **Question 4: Order Total Calculator** (`level2/question04_order_total.js`)  
  Calculates the total cost across an array of item objects by multiplying unit price by quantity.

### Level 3 — Upper Intermediate: Collections and Transformations
- **Question 3: Merge Application Settings** (`level3/question03_merge_settings.js`)  
  Non-destructively merges default and user settings while preserving unspecified nested notification options.
- **Question 4: Shopping Cart** (`level3/question04_shopping_cart.js`)  
  Manages cart items by incrementing quantity on duplicate IDs instead of creating duplicate entries, and supports removal and total calculation.

### Level 4 — Advanced: Object Design and Data Integrity
- **Question 3: Prototype Inheritance** (`level4/question03_prototype_inheritance.js`)  
  Demonstrates prototypal inheritance between `Vehicle` and `Car`, verifying shared method references in memory.
- **Question 4: Proxy Change Tracker** (`level4/question04_proxy_change_tracker.js`)  
  Wraps an object in an ES6 Proxy to intercept and log property additions, updates, and deletions on top-level properties.

---

## Project Structure

```

# java-object-assigntext
chiefNusa/
├── README.md
├── level1/
│   ├── question02_update_product.js
│   └── question03_add_delete_properties.js
├── level2/
│   ├── question01_rectangle_calculator.js
│   └── question04_order_total.js
├── level3/
│   ├── question03_merge_settings.js
│   └── question04_shopping_cart.js
├── level4/
│   ├── question03_prototype_inheritance.js
│   └── question04_proxy_change_tracker.js
└── outputs/
    └── README.md
```

---

## Prerequisites

- **Node.js** (v16.0 or higher)
- Vanilla JavaScript only — zero third-party dependencies.

---

## Running the Code

Run any file directly using Node.js:

```powershell
node level1/question02_update_product.js
node level1/question03_add_delete_properties.js
node level2/question01_rectangle_calculator.js
node level2/question04_order_total.js
node level3/question03_merge_settings.js
node level3/question04_shopping_cart.js
node level4/question03_prototype_inheritance.js
node level4/question04_proxy_change_tracker.js
```
