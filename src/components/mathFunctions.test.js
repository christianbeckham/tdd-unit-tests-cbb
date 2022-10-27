import { add, divide, multiply, subtract } from "./mathFunctions";

describe("Test add function with 5 + 5", () => {
	const value = add(5, 5);

	it("should return 10", () => {
		expect(value).toBe(10);
	});

	it("should not return 55", () => {
		expect(value).not.toBe(55);
	});
});

describe("Test divide function with 25/5", () => {
	const value = divide(25, 5);

	it("should return 5", () => {
		expect(value).toBe(5);
	});

	it("should not return 6", () => {
		expect(value).not.toBe(6);
	});
});

describe("Test multiply function with 5 x 5", () => {
	const value = multiply(5, 5);

	it("should return 25", () => {
		expect(value).toBe(25);
	});

	it("should not return 5", () => {
		expect(value).not.toBe(5);
	});
});

describe("Test subtract function with 10 - 5", () => {
	const value = subtract(10, 5);

	it("should return 5", () => {
		expect(value).toBe(5);
	});

	it("should not return 10", () => {
		expect(value).not.toBe(10);
	});
});
