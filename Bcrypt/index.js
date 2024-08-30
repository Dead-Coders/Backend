const bcrypt = require("bcrypt");

const saltRounds = 10;
bcrypt.genSalt(saltRounds, (err, salt) => {
  if (err) {
    console.log(err);
  }
});

const userPassword = "user_password"; // Replace with the actual password
bcrypt.hash(userPassword, saltRounds, (err, hash) => {
  if (err) {
    console.log(err);
  }

  // Hashing successful, 'hash' contains the hashed password
  console.log(
    "Hashed password:",
    hash,
    "<br/>",
    "original password is :",
    userPassword
  );
});
