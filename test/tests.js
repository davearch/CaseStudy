var assert = require("assert");
const RomanNumeralTranslator = require("../roman_numeral_parser");

/*
  Straight from Wikipedia:

  I = 1
  V = 5
  X = 10
  L = 50
  C = 100
  D = 500
  M = 1000

  Numbers are formed by combining symbols and adding the values,
  so II is two (two ones) and XIII is thirteen (a ten and three ones).

  There is no zero in this system and characters do not represent tens,
  hundreds and so on according to position as in 207 or 1066;
  those numbers are written as CCVII (two hundreds, a five and two ones)
  and MLXVI (a thousand, a fifty, a ten, a five and a one).

  Symbols are placed from left to right in order of value, starting with the largest.
  However, in a few specific cases, to avoid four characters being repeated
  in succession (such as IIII or XXXX), subtractive notation is often used as
  follows:

    - I placed before V or X indicates one less, so four is IV (one less than five) and nine is IX (one less than ten)
    - X placed before L or C indicates ten less, so forty is XL (ten less than fifty) and ninety is XC (ten less than a hundred)
    - C placed before D or M indicates a hundred less, so four hundred is CD (a hundred less than five hundred) and nine hundred is CM (a hundred less than a thousand)

  For example:

    - MCMIV is 1904 (M is a thousand, CM is nine hundred and IV is four)
    - 1954 is MCMLIV
    - 1990 is MCMXC
    - 2014 is MMXIV
*/

/**
 * Test Suite
 */
test = new RomanNumeralTranslator();

describe("RomanNumeralTranslator", function () {
  describe("Roman Numeral Parser", function () {
    it("should do simple parsing", function () {
      assert.equal(1, test.parseRomanNumeral("I"));
    });

    it("should not not parse zero", function () {
      assert.equal(0, test.parseRomanNumeral(""));
    });

    it("should do complex parsing", function () {
      assert.equal(346, test.parseRomanNumeral("CCCXLVI"));
    });

    it("should do more complex parsing", function () {
      assert.equal(207, test.parseRomanNumeral("CCVII"));
    });

    it("should do even more complex parsing", function () {
      assert.equal(1066, test.parseRomanNumeral("MLXVI"));
    });
  });

  describe("Integer Parser", function () {
    it("should do simple parsing", function () {
      assert.equal("V", test.parseInteger(5));
    });

    it("should not parse zero", function () {
      assert.equal("", test.parseInteger(0));
    });

    it("should not use smaller symbols first", function () {
      assert.notEqual("III", test.parseInteger(4));
    });

    it("should do complex parsing", function () {
      assert.equal("CCCXLVI", test.parseInteger(346));
    });

    it("should do more complex parsing", function () {
      assert.equal("CCVII", test.parseInteger(207));
    });

    it("should do even more complex parsing", function () {
      assert.equal("MLXVI", test.parseInteger(1066));
    });
  });
});
