const bcrypt = require("bcryptjs");

const enteredPassword = "password123"; // The password you want to test
const storedHash = "$2a$10$Q4xM0bE4GcDhNlaGrO3c8OFaKBRyqDkk4Qq9C77X5iYmT8H7xJQ7S"; // The stored hash from your DB

bcrypt.compare(enteredPassword, storedHash, (err, isMatch) => {
    if (err) {
        console.error("❌ Error comparing passwords:", err);
    } else {
        console.log("🔑 Password Match:", isMatch);
    }
});
