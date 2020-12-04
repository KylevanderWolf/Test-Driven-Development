const findNeedle = require("./find-needle.js");

test("Find the needle", () => {
    const words = ["house", "train", "slide", "needle", "book"];
    const expected = 3;

    const output = findNeedle(words);

    expect(output).toEqual(expected);
});