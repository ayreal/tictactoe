// use an IFFE pattern here to keep values out of the global scope
// this is the "module pattern" (don't confuse with the "module export pattern")
// I used this instead of ES6 classes because there is only one gameBoard
const gameboard = (() => {
  const values = [];

  // check if space is already occupied
  const isOccupied = spaceId => {
    return true;
  };

  // place given player's marker in array at given place
  const placeMarker = (player, spaceId) => {
    // const marker = player.marker;
    // return (values[spaceId] = marker);
  };

  // render gameboard values to the DOM
  const render = () => {
    return document.querySelectorAll(".gameSquare").forEach((square, index) => {
      if (values[index]) {
        return (square.innerText = `${values[index]}`);
      } else {
        return null;
      }
    });
  };

  return { render, placeMarker, isOccupied };
})();

// module export pattern assures I can access this code in my test files
module.exports = {
  isOccupied: gameboard.isOccupied,
  render: gameboard.render,
  placeMarker: gameboard.placeMarker,
  values: gameboard.values
};
