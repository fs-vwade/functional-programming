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

/**
 *
 * @param {number[]} arr
 */
function isAllEven(arr) {
	let is_even = true;

	while (is_even && arr.length) {
		is_even = arr.pop() % 2 === 0;
	}

	return is_even;
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

function evenAndOdd(arr) {
	let evens = [];
	let odds = [];

	for (const n of arr) {
		if (n % 2 === 0) {
			evens.push(n);
		} else {
			odds.push(n);
		}
	}

	return [evens, odds];
}

//#endregion Nested Loops and Arrays

// --------------------------
//#region Practice
// --------------------------

function exponentiate(b, p) {
	let product = 1;
	let i = p < 0 ? -p : p;

	if (!(Number.isInteger(b) && Number.isInteger(p))) return "error";

	while (i--) {
		product *= b;
	}

	return p < 0 ? 1 / product : product;
}

function onlyOdds(n) {
	let i = 1;
	let sum = 0;

	while (i <= n) {
		sum += i;
		i += 2;
	}

	return sum;
}

function bacteriaTime(current, target) {
	let duplications = 0;

	if (!(0 < current && 0 < target)) return "values must be greater than zero"; // a necessary requirement
	if (target < current) return "target must be larger than current";

	while (current < target) {
		current <<= 1;
		duplications += 1;
	}

	return 20 * duplications;
}

function getAverage(nums) {
	if (!nums.length) return null;
	let sum = 0;

	for (const n of nums) {
		sum += n;
	}

	return sum / nums.length;
}

function countCoins(coins) {
	let value = 0;
	const key = {
		Q: 25,
		D: 10,
		N: 5,
		P: 1,
	};

	for (const coin of coins) {
		value += key[coin];
	}

	return value;
}

function getPairs(n) {
	if (!(Number.isInteger(n) && 0 < n)) return "error";

	let pairs = [];

	for (let i = 1; i <= n; i++) {
		for (let j = i; j <= n; j++) {
			const pair = [i, j];
			pairs.push(pair);
		}
	}
	return pairs;
}

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
	isAllEven,
	makeBoard,
	evenAndOdd,
	exponentiate,
	onlyOdds,
	bacteriaTime,
	getAverage,
	countCoins,
	getPairs,
};
