const expect = require("chai").expect;

describe("GAMEBOARD METHODS", () => {
  describe("placeMarker", () => {
    const placeMarker = require("../game_logic/gameboard").placeMarker;
    let values = ["x", null, null, "o"];
    let player = {
      marker: "x"
    };

    placeMarker(player, 2);

    it("should add a Player's marker to the correct cell", () => {
      expect(values[2]).to.be.a("string", "x");
    });
  });

  describe("render", () => {
    const render = require("../game_logic/gameboard").render;
    it("should return an array", () => {
      expect(render()).to.be.an("array");
    });
  });
});
