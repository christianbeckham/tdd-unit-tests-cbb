const capitalizeFirstLetter = (string) => {
	return string[0].toUpperCase() + string.substring(1);
};

const concatTwoStrings = (firstString, secondString) => {
	return firstString.concat(secondString);
};

const returnSecondWordInString = (phrase) => {
	return phrase.split(" ")[1];
};

export { capitalizeFirstLetter, concatTwoStrings, returnSecondWordInString };
