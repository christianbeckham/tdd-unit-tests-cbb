import {
	capitalizeFirstLetter,
	concatTwoStrings,
	returnSecondWordInString,
} from "./stringFunctions";

describe("Test capitalizeFirstLetter function with string", () => {
	const str = capitalizeFirstLetter("lorem ipsum");

	it("should return 'Lorem ipsum' with uppercase 'L'", () => {
		expect(str).toMatch("/Lorem ipsum/");
	});

	it("should not return 'lorem ipsum' with lowercase 'l'", () => {
		expect(str).not.toMatch("/lorem ipsum/");
	});
});

describe("Test concatTwoStrings function with string", () => {
	const str = concatTwoStrings("Java", "Script");

	it("should return 'JavaScript'", () => {
		expect(str).toMatch("/JavaScript/");
	});

	it("should not return 'Java Script'", () => {
		expect(str).not.toMatch("/Java Script/");
	});
});

describe("Test returnSecondWordInString function with string", () => {
	const str = returnSecondWordInString("Lorem ipsum dolor sit amet");

	it("should return 'ipsum'", () => {
		expect(str).toMatch(/ipsum/);
	});

	it("should not return 'dolor'", () => {
		expect(str).not.toMatch(/dolor/);
	});
});
