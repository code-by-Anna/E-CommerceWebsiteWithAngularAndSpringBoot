for (let i=0; i < 5; i++) {
console.log(i);
}
console.log(" ");

let total: number = 0;
let reviews: number[] = [5,4,6,7];

for (let i=0; i < reviews.length; i++) {
    console.log(reviews[i]);
    total += reviews[i];
    }

    console.log(" ");

    console.log(total);
    console.log(" ");

for (let review of reviews) {

    if(review == 5) {
        console.log("Hey, it is 5!");
    } 
    console.log(review);

}