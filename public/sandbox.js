"use strict";
var logDetails = function (uid, item) {
    console.log(item + " has a uid of " + uid);
};
var greet = function (user) {
    console.log(user.name + " says hello");
};
logDetails(123, "coke");
greet({ name: "suresh", uid: 234 });
