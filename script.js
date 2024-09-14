// --------------------------
//#region Guard
// --------------------------

/**
 * @param {number} a
 * @param {number} b
 * @returns the product of `a` and `b`
 * _unless_ either of the parameters is not a number,
 * in which case the string `"error"` is returned.
 */
function multiplyNumbers(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		return "error";
	}

	return a * b;
}

/**
 *
 * @param {number} age
 * @returns "Who would you like to vote for?" if the given age is at least 18; otherwise it returns "You must be 18 or older to vote."
 */
function vote(age) {
	if (age < 18) {
		return "You must be 18 or older to vote.";
	} else {
		return "Who would you like to vote for?";
	}
}

/**
 *
 * @param {*} a
 * @param {*} b
 * @returns the two given strings concatenated together unless either a or b is not a string, in which case the string "error" is returned.
 *
 */
function concatenateStrings(a, b) {
	if (!(typeof a === "string" && typeof b === "string")) {
		return "error";
	}
	return a + b;
}

//#endregion Guard

// --------------------------
//#region Accumulator Variable
// --------------------------

/**
 * @param {int[]} nums
 * @returns the sum of the given array of numbers
 */
function sumArray(nums) {
	let total = 0;
	for (const number of nums) {
		total += number;
	}
	return total;
}

//#endregion Accumulator Variable

// --------------------------
//#region Conditional Accumulation
// --------------------------

/**
 * @param {int[]} nums
 * @returns the greatest number in the given array
 */
function findMax(nums) {
	let max = -Infinity;
	for (const number of nums) {
		if (number > max) {
			max = number;
		}
	}
	return max;
}

//**
 *
 * @param {number} n
 */
function sumToN(n) {
	let sum = 0;
	if (0 < n) {
		let i = 0;
		while (i++ < n) {
			sum += i;
		}
	}
	return sum;
}
//**
 *
 * @param {number} n
 */
function factorial(n) {

}
//**
 *
 * @param {number} n
 */
function buildNArray(n) {

}

//#endregion Conditional Accumulation

// --------------------------
//#region Return Timing
// --------------------------

/**
 * @param {string} song
 * @param {string[]} playlist
 * @returns whether the given song can be found in the playlist
 */
function isSongInPlaylist(song, playlist) {
	for (const s of playlist) {
		if (s === song) {
			return true;
		}
	}
	return false;
}

//#endregion Return Timing

// --------------------------
//#region Nested Loops and Arrays
// --------------------------

/**
 * @param {number} cols
 * @param {number} rows
 * @returns a 2D array of the given dimensions filled with "-"
 */
function makeBoard(cols, rows) {
	const board = [];
	for (let r = 0; r < rows; r++) {
		const row = [];
		for (let c = 0; c < cols; c++) {
			row.push("-");
		}
		board.push(row);
	}
	return board;
}

//#endregion Nested Loops and Arrays

// --------------------------
//#region Practice
// --------------------------

//#endregion Practice

/**
 * The code below exports your functions so they can be tested.
 * Notice that the names are currently commented out.
 * Uncomment the functions as you write them.
 */
module.exports = {
	multiplyNumbers,
	vote,
	concatenateStrings,
	sumArray,
	sumToN,
	factorial,
	buildNArray,
	findMax,
	//findLongestString,
	//countPresent,
	//getDnaComplement,
	isSongInPlaylist,
	//isAllEven,
	makeBoard,
	//evenAndOdd,
	//exponentiate,
	//onlyOdds,
	//bacteriaTime,
	//getAverage,
	//countCoins,
	//getPairs,
};
