import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let myCricketCoach = new CricketCoach;
let myGolfCoach = new GolfCoach;


// array for coaches
let theCoaches: Coach[] = [];

// add the coaches
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

//print the array
for(let coach of theCoaches){
    console.log(coach.getDailyWorkout());
}