/**
 * Removes duplicate values from an array.
 *
 * @param {Array} arr - The array from which to remove duplicates.
 * @returns {Array} A new array with duplicates removed.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * // returns [1, 2, 3]
 * removeDuplicates([1, 2, 2, 3, 3, 3]);
 *
 * @example
 * // returns ['a', 'b']
 * removeDuplicates(['a', 'a', 'b']);
 */
export const removeDuplicates = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return [...new Set(arr)];
};

/**
 * Flattens a nested array.
 *
 * @param {Array} arr - The array to flatten.
 * @returns {Array} A new flattened array.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * // returns [1, 2, 3, 4]
 * flattenArray([1, [2, [3, [4]]]]);
 *
 * @example
 * // returns ['a', 'b', 'c']
 * flattenArray(['a', ['b', ['c']]]);
 */
export const flattenArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.flat(Infinity);
};


/**
 * Finds the maximum value in an array.
 *
 * @param {Array} arr - The array to search for the maximum value.
 * @returns {number} The maximum value in the array.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * // returns 4
 * findMax([1, 2, 3, 4]);
 *
 * @example
 * // returns 10
 * findMax([10, 5, 8, 3]);
 */
export const findMax = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return Math.max(...arr);
};

/**
 * Splits an array into chunks of a specified size.
 *
 * @param {Array} arr - The array to split into chunks.
 * @param {number} size - The size of each chunk.
 * @returns {Array} A new array with the original array split into chunks.
 * @throws {TypeError} If the first parameter is not an array or the second parameter is not a number.
 *
 * @example
 * // returns [[1, 2], [3, 4], [5]]
 * chunkArray([1, 2, 3, 4, 5], 2);
 *
 * @example
 * // returns [['a', 'b', 'c'], ['d']]
 * chunkArray(['a', 'b', 'c', 'd'], 3);
 */
export const chunkArray = (arr, size) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('First parameter must be an array');
    }
    if (typeof size !== 'number') {
        throw new TypeError('Second parameter must be a number');
    }
    return arr.reduce((chunks, item, index) => {
        const chunkIndex = Math.floor(index / size);
        if (!chunks[chunkIndex]) chunks[chunkIndex] = [];
        chunks[chunkIndex].push(item);
        return chunks;
    }, []);
};


/**
 * Finds the minimum value in an array.
 *
 * @param {Array} arr - The array to search for the minimum value.
 * @returns {number} The minimum value in the array.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * // returns 1
 * findMin([1, 2, 3, 4]);
 *
 * @example
 * // returns 3
 * findMin([10, 5, 8, 3]);
 */
export const findMin = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return Math.min(...arr);
};
/**
 * Sums all the values in an array.
 *
 * @param {Array} arr - The array to sum.
 * @returns {number} The sum of all values in the array.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * // returns 10
 * sumArray([1, 2, 3, 4]);
 *
 * @example
 * // returns 15
 * sumArray([5, 5, 5]);
 */
export const sumArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.reduce((sum, num) => sum + num, 0);
};

/**
 * Calculates the average of all values in an array.
 *
 * @param {Array} arr - The array to calculate the average.
 * @returns {number} The average of all values in the array.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * // returns 2.5
 * averageArray([1, 2, 3, 4]);
 *
 * @example
 * // returns 5
 * averageArray([5, 5, 5, 5]);
 */
export const averageArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return sumArray(arr) / arr.length;
};
/**
 * Filters out duplicate values from an array.
 *
 * @param {Array} arr - The array to filter for unique values.
 * @returns {Array} A new array with only unique values.
 * @throws {TypeError} If the input is not an array.
 *
 * @example
 * // returns [1, 2, 3]
 * uniqueArray([1, 2, 2, 3, 3, 3]);
 *
 * @example
 * // returns ['a', 'b']
 * uniqueArray(['a', 'a', 'b']);
 */
export const uniqueArray = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('Input must be an array');
    }
    return arr.filter((item, index) => arr.indexOf(item) === index);
};

/**
 * Computes the difference between two arrays.
 *
 * @param {Array} arr1 - The first array.
 * @param {Array} arr2 - The second array.
 * @returns {Array} A new array with elements from the first array that are not in the second array.
 * @throws {TypeError} If either input is not an array.
 *
 * @example
 * // returns [1, 3]
 * arrayDifference([1, 2, 3], [2, 4]);
 *
 * @example
 * // returns ['a']
 * arrayDifference(['a', 'b'], ['b', 'c']);
 */
export const arrayDifference = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw new TypeError('Both inputs must be arrays');
    }
    return arr1.filter(item => !arr2.includes(item));
};
