/**
 * Capitalizes the first letter of the given string.
 * @param {string} str - The string to capitalize.
 * @returns {string} - The capitalized string.
 * @throws {TypeError} - If the input is not a string.
 */
export const capitalize = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * Converts the given string to snake_case.
 * @param {string} str - The string to convert.
 * @returns {string} - The snake_cased string.
 * @throws {TypeError} - If the input is not a string.
 */
export const toSnakeCase = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.replace(/\s+/g, '_').toLowerCase();
};
/**
 * Reverses the given string.
 * @param {string} str - The string to reverse.
 * @returns {string} - The reversed string.
 * @throws {TypeError} - If the input is not a string.
 */
export const reverseString = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    return str.split('').reverse().join('');
};

/**
 * Checks if the given string is a palindrome.
 * @param {string} str - The string to check.
 * @returns {boolean} - True if the string is a palindrome, false otherwise.
 * @throws {TypeError} - If the input is not a string.
 */
export const isPalindrome = (str) => {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    const sanitized = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    return sanitized === sanitized.split('').reverse().join('');
};
