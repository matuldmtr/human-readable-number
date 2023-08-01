module.exports = function toReadable(number) {
    const numbers = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        100: "one hundred",
        200: "two hundred",
        300: "three hundred",
        400: "four hundred",
        500: "five hundred",
        600: "six hundred",
        700: "seven hundred",
        800: "eight hundred",
        900: "nine hundred",
    };

    // console.log(Object.keys(numbers));
    // console.log(Object.keys(numbers).map((item) => Number(item)));

    let arr = Array.from(number.toString());
    // console.log(arr);
    let unit, deca, hundred;

    if (
        Object.keys(numbers)
            .map((item) => Number(item))
            .includes(number)
    ) {
        return numbers[number];
    } else if (arr.length === 2) {
        deca = arr[0] * 10;
        unit = arr[1];
        return numbers[deca] + " " + numbers[unit];
    } else if (arr.length === 3 && number - arr[0] * 100 <= 9) {
        hundred = arr[0] * 100;
        unit = arr[2];
        return numbers[hundred] + " " + numbers[unit];
    } else if (
        arr.length === 3 &&
        number - arr[0] * 100 > 10 &&
        number - arr[0] * 100 < 20
    ) {
        hundred = arr[0] * 100;
        deca = arr[1] + arr[2];
        return numbers[hundred] + " " + numbers[deca];
    } else if (arr.length === 3 && number - arr[0] * 100 - arr[1] * 10 == 0) {
        hundred = arr[0] * 100;
        deca = arr[1] + arr[2];
        return numbers[hundred] + " " + numbers[deca];
    } else {
        hundred = arr[0] * 100;
        deca = arr[1] * 10;
        unit = arr[2];
        return numbers[hundred] + " " + numbers[deca] + " " + numbers[unit];
    }
};
