const expect = require("chai").expect;

describe("GAMEBOARD METHODS", () => {
  describe("render", () => {
    const render = require("../game_logic/gameboard").render;
    it("should return an array", () => {
      expect(render()).to.be.an("array");
    });
  });
});
