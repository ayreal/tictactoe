const expect = require("chai").expect;

describe("GAMEBOARD METHODS", () => {
  describe("isOccupied", () => {
    const isOccupied = require("../game_logic/gameboard").isOccupied;

    it("should return true if a given cell is occupied", () => {
      let values = ["x", null, "o"];
      expect(isOccupied(values, 0)).to.be.true;
    });

    it("should return false if a given cell is NOT occupied", () => {
      let values = ["x", null, "o"];
      expect(isOccupied(values, 1)).to.be.false;
    });
  });

  describe("placeMarker", () => {
    const placeMarker = require("../game_logic/gameboard").placeMarker;
    it("should add a Player's marker to the correct cell", () => {
      let values = ["x", null, "o"];
      let player = {
        marker: "x"
      };

      placeMarker(values, player, 1);
      expect(values[1]).to.be.a("string", "x");
    });

    it("should return true if marker successfully added", () => {
      let values = ["x", null, "o"];
      let player = {
        marker: "x"
      };

      const handler = () => placeMarker(values, player, 1);
      expect(handler()).to.be.true;
    });

    it("should throw an error if Player chooses an occupied cell", () => {
      let values = ["x", null, "o"];
      let player = {
        marker: "x"
      };

      const handler = () => placeMarker(values, player, 0);
      expect(handler).to.throw(Error);
      expect(handler).to.throw("This space is already taken");
    });
  });

  xdescribe("render", () => {
    const render = require("../game_logic/gameboard").render;
    it("should return an array", () => {
      expect(render()).to.be.an("array");
    });
  });
});
