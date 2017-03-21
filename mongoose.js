var mongodb = require("mongoose");
mongodb.connect("mongodb://localhost:27017/my_db");

var User = mongodb.model("User", { name: String, roles: Array, age: Number });

var user1 = new User({ name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user'] });
user1.save(function(err, res) {
    if(err) {
        console.log(err);
    } else {
        console.log("User created", res);
    }

    mongodb.disconnect();
});