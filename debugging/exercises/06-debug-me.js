const { check, runTest, skipTest } = require("../../test-api/index");

// Fix the function below to pass the test!

function addSnack(snack) {
  const snacks = [
    "Waggon Wheel",
    "Doritos: Chilly Heat Wave",
    "Haribos",
    "Monster Munch",
  ];
  snacks.push(snack);
  return snacks;
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest("Get addSnack to return an array with updated snacks", function () {
  check(addSnack("Pistachios")).isEqualTo([
    "Waggon Wheel",
    "Doritos: Chilly Heat Wave",
    "Haribos",
    "Monster Munch",
    "Pistachios",
  ]);
});