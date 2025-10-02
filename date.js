/**
 * Formats a given date object into a string in the format 'YYYY-MM-DD'.
 *
 * @param {Date} date - The date object to format.
 * @returns {string} The formatted date string.
 * @throws {TypeError} If the provided argument is not a valid Date object.
 */
export const formatDate = (date) => {
    if (!(date instanceof Date) || isNaN(date)) {
        throw new TypeError('Invalid date object');
    }
    return date.toISOString().split('T')[0];
};

/**
 * Calculates the absolute difference in days between two dates.
 *
 * @param {string|Date} date1 - The first date.
 * @param {string|Date} date2 - The second date.
 * @returns {number} The absolute difference in days between the two dates.
 * @throws {TypeError} If the provided arguments are not valid dates.
 */
export const getDaysDifference = (date1, date2) => {
    const d1 = new Date(date1);
    const d2 = new Date(date2);
    if (isNaN(d1) || isNaN(d2)) {
        throw new TypeError('Invalid date');
    }
    return Math.abs((d1 - d2) / (1000 * 60 * 60 * 24));
};

/**
 * Checks if a given date falls on a weekend.
 *
 * @param {string|Date} date - The date to check. Can be a date string or a Date object.
 * @returns {boolean} - Returns true if the date is a weekend (Saturday or Sunday), otherwise false.
 * @throws {TypeError} If the provided argument is not a valid date.
 */
export const isWeekend = (date) => {
    const d = new Date(date);
    if (isNaN(d)) {
        throw new TypeError('Invalid date');
    }
    return [0, 6].includes(d.getDay());
};

/**
 * Gets the day of the month from a given date.
 *
 * @param {string|Date} date - The date from which to extract the day. Can be a date string or a Date object.
 * @returns {number} The day of the month (1-31).
 * @throws {TypeError} If the provided argument is not a valid date.
 */
export const getDay = (date) => {
    const d = new Date(date);
    if (isNaN(d)) {
        throw new TypeError('Invalid date');
    }
    return d.getDate();
};

/**
 * Gets the month from a given date.
 *
 * @param {string|Date} date - The date from which to extract the month. Can be a date string or a Date object.
 * @returns {number} The month of the given date (1-12).
 * @throws {TypeError} If the provided argument is not a valid date.
 */
export const getMonth = (date) => {
    const d = new Date(date);
    if (isNaN(d)) {
        throw new TypeError('Invalid date');
    }
    return d.getMonth() + 1;
};

/**
 * Gets the year from a given date.
 *
 * @param {string|Date} date - The date from which to extract the year. Can be a date string or a Date object.
 * @returns {number} The year extracted from the given date.
 * @throws {TypeError} If the provided argument is not a valid date.
 */
export const getYear = (date) => {
    const d = new Date(date);
    if (isNaN(d)) {
        throw new TypeError('Invalid date');
    }
    return d.getFullYear();
};
/**
 * Adds a specified number of days to a given date.
 *
 * @param {string|Date} date - The starting date.
 * @param {number} days - The number of days to add (can be negative to subtract).
 * @returns {Date} A new Date object with the days added.
 * @throws {TypeError} If the provided date is invalid or days is not a number.
 */
export const addDays = (date, days) => {
    const d = new Date(date);
    if (isNaN(d)) {
        throw new TypeError('Invalid date');
    }
    if (typeof days !== 'number' || isNaN(days)) {
        throw new TypeError('Days must be a valid number');
    }
    const result = new Date(d);
    result.setDate(result.getDate() + days);
    return result;
};