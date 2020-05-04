//Given the string "team number 2", transform and return the string in camelCase
let str = "team number 2";

function camelCase(str) {
  let team = str.slice(0, 4);
  let firstHump = str.slice(5, 6).toUpperCase();
  let umber = str.slice(6, 11);
  let two = str.slice(12, 13);
  return team + firstHump + umber + two;
}
