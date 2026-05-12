interface User {
    id: string;
    name: string;
    email: string;
    password: string;
}

// 1. We keep password, but omit email. 
// 2. We wrap the whole thing in Readonly<> to prevent modifications.
type UserPreview = Readonly<Omit<User, "email">>;

const preview: UserPreview = {
    id: "xyz",
    name: "Krishna",
    password: "securePassword123" // Now allowed by the type
};

// Now this works for reading:
console.log(preview.password); 

