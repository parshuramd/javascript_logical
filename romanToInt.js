function romanToInt(roman) {
    const romanNumerals = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;

    for (let i = 0; i < roman.length; i++) {
        const currentVal = romanNumerals[roman[i]];
        const nextVal = romanNumerals[roman[i + 1]];

        if (nextVal && currentVal < nextVal) {
            result += nextVal - currentVal;
            i++; // Skip the next value since it was already accounted for
        } else {
            result += currentVal;
        }
    }

    return result;
}

const romanNumeral = "XIV";
const integerEquivalent = romanToInt(romanNumeral);
console.log(`The Roman numeral ${romanNumeral} is equivalent to ${integerEquivalent}`);
