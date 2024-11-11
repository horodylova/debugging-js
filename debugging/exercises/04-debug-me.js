const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function findMentorsFavouritePlant(mentor) {
  const plants = {
    Rob: "Money Plant",
    Hannah: "Sunflower",
    Lewis: "Cactus",
    Harrison: "Venus Fly Trap",
  };
  return plants[mentor];
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest("Return the plant of the passed mentor", function () {
  check(findMentorsFavouritePlant("Lewis")).isEqualTo("Cactus");
  check(findMentorsFavouritePlant("Rob")).isEqualTo("Money Plant");
  check(findMentorsFavouritePlant("Hannah")).isEqualTo("Sunflower");
  check(findMentorsFavouritePlant("Harrison")).isEqualTo("Venus Fly Trap");
});