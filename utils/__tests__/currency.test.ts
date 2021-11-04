import {parseCurrency} from "../currency";

describe("currency", () => {
  describe("parseCurrency", () => {
    it("deberia devolver el precio localizado", () => {
      const actual = 65;
      const expected = "S/\xa065,00";

      expect(parseCurrency(actual)).toEqual(expected);
    });
  });
});
