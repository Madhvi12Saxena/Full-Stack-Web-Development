class User {
    constructor(username, password) {
      this.username = username;
      this._password = password;
    }
  
    get password() {
      return this._password.replace(/./g, "*");
    }
  
    set password(newPassword) {
      if (newPassword.length >= 8 && /[0-9]/.test(newPassword) && /[A-Z]/.test(newPassword)) {
        this._password = newPassword;
      } else {
        console.error("Invalid password. Password must be at least 8 characters long, and contain at least one number and one uppercase letter.");
      }
    }
  }
  
  // Instantiate an instance of the User class
  const user = new User("john_doe", "Pass1234");
  
  // Get the password (masked)
  console.log(user.password); // Output: ********
  
  // Set a new password
  user.password = "newpass";
  // Output: Invalid password. Password must be at least 8 characters long, and contain at least one number and one uppercase letter.
  