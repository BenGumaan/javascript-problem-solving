// speed of aircrafts is given in *knots*
// travelTime is in *minutes*
// travel distance should be returned in *kilometers*
function travelDistance(avgSpeed, travelTime) {
  const KM_PER_KNOT = 1.852; // 1 knot = 1.852 kilometers per hour.
  const travelHours = travelTime / 60;
  return  travelHours * (avgSpeed * KM_PER_KNOT);
}


// Problem link: https://www.codewars.com/kata/67b7a527c9f842fd3b02adb8/train/javascript