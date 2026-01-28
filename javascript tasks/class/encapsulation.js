class UserAccount {
    constructor(username, password) {
        this.username = username;

        // private variable using let
        let _privatePassword = password;

        // login method (closure)
        this.login = function (user, pass) {
            if (this.username === user && _privatePassword === pass) {
                console.log("Login Successful");
            }
        };
    }
}

// creating object
let user1 = new UserAccount("niroshasistu", "12345");


// accessing public property
console.log("Username:", user1.username); // ✅ works
user1.login("niroshasistu", "12345"); // ✅ works