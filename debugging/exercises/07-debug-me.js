const { check, runTest, skipTest } = require("../../test-api/index.js");

// Fix the function below to pass the test!

function checkIfHarrisonCanBuy(money, product) {
  const carBootPrices = {
    "Groovy-Chick Roller Skates": 4,
    "Broken Guitar": 6,
    "Mysterious Box": 100,
    "Used Dentures": 0.5,
    "500 Piece, Rare Bottle Cap Collection": 1,
  };

  if (money >= carBootPrices[product]) {
    return `Harrison can buy ${product}!`;
  }
  return `Harrison can not buy ${product} :(`;
}

// Please do not change code below this line. You do not need to alter the tests or the test suite.

runTest("checkIfHarrisonCanBuy returns the correct string", function () {
  check(checkIfHarrisonCanBuy(50, "Groovy-Chick Roller Skates")).isEqualTo(
    `Harrison can buy Groovy-Chick Roller Skates!`
  );
  check(checkIfHarrisonCanBuy(50, "Used Dentures")).isEqualTo(
    `Harrison can buy Used Dentures!`
  );
  check(checkIfHarrisonCanBuy(50, "Mysterious Box")).isEqualTo(
    `Harrison can not buy Mysterious Box :(`
  );
});