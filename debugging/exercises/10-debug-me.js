const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function getFishName(fish) {
  const fishTank = {
    "Clown Fish": "Nemo",
    "Blue Tang": "Dory",
    "Great White Shark": "Bruce",
    "Moorish Idol": "Gill",
    "Sea Turtle": "Crush",
  };

  return fishTank[fish];
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest("Get getFishName to return the name of the given fish", function () {
  check(getFishName("Clown Fish")).isEqualTo("Nemo");
});