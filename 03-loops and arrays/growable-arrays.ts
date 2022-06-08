let reviewsTwo: number[] = [5,4,6,7];

reviewsTwo.push(0);
reviewsTwo.push(9);

for (let review of reviewsTwo) {

    if(review == 5) {
        console.log("Hey, it is 5!");
        review++;
    } 
    console.log(review);

}