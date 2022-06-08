var reviewsTwo = [5, 4, 6, 7];
reviewsTwo.push(0);
reviewsTwo.push(9);
for (var _i = 0, reviewsTwo_1 = reviewsTwo; _i < reviewsTwo_1.length; _i++) {
    var review = reviewsTwo_1[_i];
    if (review == 5) {
        console.log("Hey, it is 5!");
        review++;
    }
    console.log(review);
}
