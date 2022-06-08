for (var i = 0; i < 5; i++) {
    console.log(i);
}
console.log(" ");
var total = 0;
var reviews = [5, 4, 6, 7];
for (var i = 0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
}
console.log(" ");
console.log(total);
console.log(" ");
for (var _i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
    var review = reviews_1[_i];
    if (review == 5) {
        console.log("Hey, it is 5!");
    }
    console.log(review);
}
