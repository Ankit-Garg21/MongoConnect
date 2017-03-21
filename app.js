var mongodb = require("mongodb");
var MongoClient = mongodb.MongoClient;
var url = "mongodb://localhost:27017/my_db";

MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log("Unable to connect");
    } else {
        console.log("Connection established");

        var collection = db.collection("users");
        var users = [
            { name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user'] },
            { name: 'modulus user', age: 22, roles: ['user'] },
            { name: 'modulus super admin', age: 92, roles: ['super-admin', 'admin', 'moderator', 'user'] }
        ];

        /* INSERT */
        // collection.insert(users, function(err, res) {
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', res.length, res);
        //     }
        // });

        /* UPDATE */
        // collection.update({name: 'modulus user'}, {$set: {enabled: false}}, function(err, res) {
        //     if(err) {
        //         console.log(err);
        //     } else {
        //         console.log('Updated documents into the "users" collection. The documents updated with "_id" are:', res);
        //     }
        // });

        /* FIND */
        // collection.find({name: 'modulus user'}).toArray(function(err, res) {
        //     if(err) {
        //         console.log(err);
        //     } else if(res.length) {
        //         console.log("Records found", res);
        //     } else {
        //         console.log("No records found");
        //     }
        // });

        /* CURSOR */
        var cursor = collection.find({name: 'modulus user'});
        cursor.sort({age: -1});
        cursor.limit(10);
        cursor.skip(0);

        cursor.each(function(err, res) {
            if(err) {
                console.log(err);
            } else {
                console.log("Record Fetched", res);
            }
        });

        db.close();
    }
});