const { check, runTest, skipTest } = require("../../test-api/index.js");

// The findHighestScoring function will take an array of objects and an integer as arguments. First, the function will sort the array based on the score properties in descending order. The function will then calculate how many objects will be returned in a new array, based on how many times num fits into the length of the initial array of objects argument.

//(e.g. When num is 4, num goes into the length of the input object (15) 3 times, so the function should return the 3 highest scoring objects).

/*For example findHighestScoring([
  { score: 100, country: "England" },
  { score: 0, country: "Scotland" },
  { score: 30, country: "Italy" },
  { score: 40, country: "France" }], 2)
  Would return [{ score: 100, country: "England" },{ score: 40, country: "France" }]

findHighestScoring([
  { score: 100, country: "England" },
  { score: 35, country: "Scotland" },
  { score: 30, country: "Italy" },
  { score: 40, country: "France" }], 3)
  Would return [{ score: 100, country: "England" }]
*/

//It is your job to fix it.
function findHighestScoring(array, num) {
  if (num === 0 || array.length < num) {
    return [];
  }

  array.sort((a, b) => b.score - a.score);

  const groupCount = Math.floor(array.length / num);

  return array.slice(0, groupCount);
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest('Returns empty array if num is 0"', function () {
  check(findHighestScoring([{ score: 100, country: "England" }], 0)).isEqualTo([]);
});
runTest('Returns empty array if array length is less than num"', function () {
  check(findHighestScoring([{ score: 100, country: "England" }], 4)).isEqualTo([]);
});
runTest(
  "Returns correct array of highest objects relative to array.length and num (e.g. num = 4 goes into 15 3 times, the 3 highest scoring objects must return)",
  function () {
    check(
      findHighestScoring(
        [
          { score: 100, country: "England" },
          { score: 15, country: "Scotland" },
          { score: 98, country: "Italy" },
          { score: 96, country: "France" },
          { score: 80, country: "Germany" },
          { score: 42, country: "Uganda" },
          { score: 70, country: "Nepal" },
          { score: 91, country: "USA" },
          { score: 12, country: "Wales" },
          { score: 72, country: "Argentina" },
          { score: 38, country: "Kenya" },
          { score: 60, country: "Brazil" },
          { score: 9, country: "China" },
          { score: 78, country: "Switzerland" },
          { score: 52, country: "Norway" },
        ],
        4
      )
    ).isEqualTo([
      { score: 100, country: "England" },
      { score: 98, country: "Italy" },
      { score: 96, country: "France" },
    ]);
  }
);