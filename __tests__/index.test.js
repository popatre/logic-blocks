const {
    findNoIncreasesInDepth,
    findWindowIncreasesInDepth,
} = require("../index");

describe("Part 1 - findNoIncreasesInDepth", () => {
    test("returns a number", () => {
        expect(typeof findNoIncreasesInDepth([])).toBe("number");
    });
    test("should return 0 increases when passed single value in array", () => {
        expect(findNoIncreasesInDepth([1])).toBe(0);
    });
    test("should return correct increases when passed two digits in array, with the second digit larger in value", () => {
        expect(findNoIncreasesInDepth([1, 2])).toBe(1);
    });
    test("should return correct increases when passed two digits in array, with the second digit smaller in value", () => {
        expect(findNoIncreasesInDepth([2, 1])).toBe(0);
    });
    test("should return correct increases when passed longer array, of digits increasing in value", () => {
        expect(findNoIncreasesInDepth([1, 2, 3, 4])).toBe(3);
    });
    test("should return no increases when passed array containing same values", () => {
        expect(findNoIncreasesInDepth([1, 1, 1])).toBe(0);
    });
    test("should return correct increases when passed longer array, of digits increasing and decreasing in value", () => {
        expect(findNoIncreasesInDepth([1, 2, 1, 4, 4])).toBe(2);
        expect(
            findNoIncreasesInDepth([
                199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
            ])
        ).toBe(7);
    });
    test("should not mutate the input array", () => {
        const input = [1, 2, 3, 4];
        findNoIncreasesInDepth(input);
        expect(input).toEqual([1, 2, 3, 4]);
    });
});

describe("Part 2 - findWindowIncreasesInDepth", () => {
    test("returns a number", () => {
        expect(typeof findWindowIncreasesInDepth([])).toBe("number");
    });
    test("should return 0 increases when passed single value in array", () => {
        expect(findWindowIncreasesInDepth([1])).toBe(0);
    });
    test("should return 0 increases when passed array with insufficient amount of values to compare ", () => {
        expect(findWindowIncreasesInDepth([1, 2, 3])).toBe(0);
    });
    test("should return correct increases when passed array minimum amount to compare - increasing values ", () => {
        expect(findWindowIncreasesInDepth([1, 2, 3, 4])).toBe(1);
    });
    test("should return correct increases when passed array with minimum amount to compare - decreasing values ", () => {
        expect(findWindowIncreasesInDepth([1, 2, 3, 0])).toBe(0);
    });
    test("should return correct increases when passed larger array  of increasing window values ", () => {
        expect(findWindowIncreasesInDepth([1, 2, 3, 4, 5, 6, 7])).toBe(4);
    });
    test("should return correct increases when passed larger array of mixed window values ", () => {
        expect(findWindowIncreasesInDepth([1, 2, 3, 4, 1, 1, 5])).toBe(2);
        expect(
            findWindowIncreasesInDepth([
                199, 200, 208, 210, 200, 207, 240, 269, 260, 263,
            ])
        ).toBe(5);
    });
    test("should not mutate the input array", () => {
        const input = [1, 2, 3, 4, 1, 1];
        findWindowIncreasesInDepth(input);
        expect(input).toEqual([1, 2, 3, 4, 1, 1]);
    });
});
