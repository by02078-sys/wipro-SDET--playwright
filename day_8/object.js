// problem 21
const student = {
    name: "Tammy",
    age: 22,
    course: "Computer Science",
    city: "Nellore"
};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

// problem 22

const user = {
    id: 101,
    username: "dev_user",
    role: "admin",
    active: true
};

const keyCount = Object.keys(user).length;
console.log("Total keys:", keyCount);

//problem 23
 
const details = { name: "Hrithick Grand", type: "Hotel" };
const contact = { location: "Main Road", rating: 5 };

const mergedObject = { ...details, ...contact };
console.log(mergedObject);

//problem 24

const product = { id: 501, name: "Smartwatch", price: 2500 };

const keys = Object.keys(product);
const values = Object.values(product);
const entries = Object.entries(product);

console.log("Keys:", keys);
console.log("Values:", values);
console.log("Entries (Pairs):", entries);

//problem 25

const shoppingCart = {
    items: [
        { name: "Serum", price: 450, quantity: 2 },
        { name: "Sunscreen", price: 600, quantity: 1 },
        { name: "USB Cable", price: 150, quantity: 3 }
    ],
    calculateTotal: function() {
        let total = 0;
        for (let item of this.items) {
            total += item.price * item.quantity;
        }
        return total;
    }
};

console.log("Total Bill Amount: " + shoppingCart.calculateTotal());