// use an IFFE pattern here to keep contents out of the global scope
// this is the "module pattern" (don't confuse with the "module export pattern")
// I used this instead of ES6 classes because there is only one gameBoard
const gameboard = (() => {
  const contents = [];

  const render = () => {
    return contents;
  };

  return { render };
})();

// module export pattern assures I can access this code in my test files
module.exports = {
  render: gameboard.render
};
