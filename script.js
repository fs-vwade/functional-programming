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

/**
 *
 * @param {number} n
 */
function sumToN(n) {
	let sum = 0;
	while (0 < n) {
		sum += n--;
	}
	return sum;
}
/**
 *
 * @param {number} n
 */
function factorial(n) {
	let mul = 1;

	if (!(0 <= n && Number.isInteger(n))) {
		return "error";
	}

	while (1 < n) {
		mul *= n--;
	}

	return mul;
}
/**
 *
 * @param {number} n
 */
function buildNArray(n) {
	let arr = [];

	if (!Number.isInteger(n)) {
		return "error";
	}

	{
		let i = 0;

		while (i++ < n) {
			arr.push(i);
		}
	}

	return arr;
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

/**
 *
 * @param {string[]} arr
 */
function findLongestString(arr) {
	let longest = "";

	for (const str of arr) {
		if (longest.length < str.length) {
			longest = str;
		}
	}

	return longest;
}
/**
 *
 * @param {boolean[]} attendance
 */
function countPresent(attendance) {
	let trues = 0;

	for (const student of attendance) {
		trues += student;
	}

	return trues;
}
/**
 *
 * @param {string} dna
 *@returns the complimentary DNA strand as a string
 *
 * In DNA strings, the symbols A and T are complements of each other, and C and G are complements. getDnaComplement(dna: string) receives one side of the DNA strand and returns the complementary string.
 */
function getDnaComplement(dna) {
	dna = Array.from(dna.toUpperCase());

	for (let i = 0; i < dna.length; i++) {
		switch (dna[i]) {
			case "A":
				dna[i] = "T";
				break;
			case "T":
				dna[i] = "A";
				break;
			case "C":
				dna[i] = "G";
				break;
			case "G":
				dna[i] = "C";
				break;
		}
	}

	return dna.join("");
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
	findLongestString,
	countPresent,
	getDnaComplement,
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
