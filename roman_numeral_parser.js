/**
 * Translation class for Roman Numerals
 *
 * Provides two primary methods:
 *  - parseRomanNumeral: Conversion from Roman Numeral to Integer
 *  - parseInteger: Conversion from Integer to Roman Numeral
 *
 * Both methods run in O(n) time with O(1) space complexity.
 * They use constant space because the hashmap never grows irrespective of input.
 */
class RomanNumeralTranslator {
  /**
   * Class constructor.
   *
   * Initializes a Roman Numeral HashMap for O(1) lookups.
   */
  constructor() {
    // include complex numbers to aid in reverse translation.
    this.romanNumeralMap = new Map([
      ["M", 1000],
      ["CM", 900],
      ["D", 500],
      ["CD", 400],
      ["C", 100],
      ["XC", 90],
      ["L", 50],
      ["XL", 40],
      ["X", 10],
      ["IX", 9],
      ["V", 5],
      ["IV", 4],
      ["I", 1],
    ]);
  }

  /**
   * Converts a Roman Numeral to an Integer.
   *
   * Runs in O(n) time where n is the length of the string.
   * O(1) constant space complexity.
   *
   * @param {String} rn The Roman Numeral
   */
  parseRomanNumeral(rn) {
    if (!rn) {
      return 0;
    }
    let len = rn.length - 1;
    const LAST_ITEM = rn[len];

    var total = this.romanNumeralMap.get(LAST_ITEM);

    // run backwards through the string, checking to see if current value is less than the previous.
    for (var i = len - 1; i >= 0; i--) {
      if (
        this.romanNumeralMap.get(rn[i]) < this.romanNumeralMap.get(rn[i + 1])
      ) {
        total -= this.romanNumeralMap.get(rn[i]);
      } else {
        total += this.romanNumeralMap.get(rn[i]);
      }
    }
    return total;
  }

  /**
   * Converts an Integer to a Roman Numeral String.
   *
   * Runs in O(n) time where n is the length of the Roman Numeral that we create.
   * O(1) constant space complexity.
   *
   * @param {Integer} number The integer to parse
   */
  parseInteger(number) {
    let romanNumeralArr = [];

    // run through hashmap from largest to smallest symbol
    for (let [symbol, intValue] of this.romanNumeralMap) {
      if (number == 0) {
        break;
      }

      var quotient = Math.floor(number / intValue);
      var remainder = number % intValue;

      number = remainder;
      if (quotient) {
        romanNumeralArr.push(symbol.repeat(quotient));
      }
    }
    return romanNumeralArr.join("");
  }
}

module.exports = RomanNumeralTranslator;
