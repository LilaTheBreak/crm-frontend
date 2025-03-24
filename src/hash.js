const bcrypt = require("bcryptjs");

const password = "password123"; // Change this to the password you want to hash

bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        console.error("❌ Error hashing password:", err);
        return;
    }
    console.log("✅ Hashed Password:", hash);
});
