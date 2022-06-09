"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CricketCoach_1 = require("./CricketCoach");
var GolfCoach_1 = require("./GolfCoach");
var myCricketCoach = new CricketCoach_1.CricketCoach;
var myGolfCoach = new GolfCoach_1.GolfCoach;
// array for coaches
var theCoaches = [];
// add the coaches
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
//print the array
for (var _i = 0, theCoaches_1 = theCoaches; _i < theCoaches_1.length; _i++) {
    var coach = theCoaches_1[_i];
    console.log(coach.getDailyWorkout());
}
