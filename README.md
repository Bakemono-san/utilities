# @bakemono-san/utilities

[![Hacktoberfest](https://img.shields.io/badge/hacktoberfest-2025-blueviolet.svg)](https://hacktoberfest.digitalocean.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

A collection of reusable utility functions for JavaScript projects. These functions simplify common programming tasks like string manipulation, array operations, date handling, number calculations, and object processing. Designed for efficiency and reusability.

## 🎃 Hacktoberfest 2025

This repository is participating in **Hacktoberfest 2025**! We welcome contributions from developers of all skill levels. Whether you're a beginner looking to make your first open source contribution or an experienced developer wanting to help improve this utility library, there are opportunities for everyone.

### How to Contribute for Hacktoberfest

1. **Fork** this repository
2. **Clone** your fork to your local machine
3. **Create** a new branch for your feature or bug fix
4. **Make** your changes and test them thoroughly
5. **Commit** your changes with a descriptive commit message
6. **Push** to your fork and **submit** a pull request

### Contribution Ideas

- 🐛 **Bug fixes**: Help us identify and fix bugs
- ✨ **New utility functions**: Add useful functions that follow our existing patterns
- 📚 **Documentation improvements**: Enhance code comments, README, or examples
- 🧪 **Tests**: Add or improve test coverage
- 🎨 **Code quality**: Refactor code for better readability or performance
- 📦 **Build improvements**: Optimize build process or dependencies

All meaningful contributions will be considered for Hacktoberfest! Please make sure to follow our contribution guidelines and maintain the existing code style.

## Table of Contents

- [🎃 Hacktoberfest 2025](#-hacktoberfest-2025)
- [Installation](#installation)
- [Features](#features)
- [Usage](#usage)
- [API Documentation](#api-documentation)
  - [String Utilities](#string-utilities)
  - [Array Utilities](#array-utilities)
  - [Date Utilities](#date-utilities)
- [Development](#development)
  - [Cloning the Repository](#cloning-the-repository)
  - [Running Tests](#running-tests)
  - [Testing Locally](#testing-locally)
- [Contributing](#contributing)
- [License](#license)

## Installation

Install the package using npm:

```bash
npm install @bakemono-san/utilities
```

Or link it locally for development:

```bash
npm link
```

## Features

- **String Utilities**: Functions for transforming and validating strings.
- **Array Utilities**: Helpers for array manipulation.
- **Date Utilities**: Tools for working with dates and times.
- **Number Utilities**: Functions for number calculations and validation.
- **Object Utilities**: Helpers for deep merging, cloning, and more.

## Usage

### Importing Functions

If you are using ES Modules (ESM):

```javascript
import { capitalize } from '@bakemono-san/utilities';

console.log(capitalize('hello world')); // Output: Hello world
```

If you are using CommonJS:

```javascript
const { capitalize } = require('@bakemono-san/utilities');

console.log(capitalize('hello world')); // Output: Hello world
```

## API Documentation

### String Utilities

#### `capitalize(str)`

Capitalizes the first letter of a string.

```javascript
capitalize('hello'); // Returns: 'Hello'
```

**Parameters:**

- `str` (string): The string to capitalize.

**Returns:**

- (string): The capitalized string.

**Throws:**

- `TypeError`: If the input is not a string.

#### `toSnakeCase(str)`

Converts the given string to snake_case.

```javascript
toSnakeCase('Hello World'); // Returns: 'hello_world'
```

**Parameters:**

- `str` (string): The string to convert.

**Returns:**

- (string): The snake_cased string.

**Throws:**

- `TypeError`: If the input is not a string.

#### `reverseString(str)`

Reverses the given string.

```javascript
reverseString('hello'); // Returns: 'olleh'
```

**Parameters:**

- `str` (string): The string to reverse.

**Returns:**

- (string): The reversed string.

**Throws:**

- `TypeError`: If the input is not a string.

#### `isPalindrome(str)`

Checks if a string is a palindrome.

```javascript
isPalindrome('racecar'); // Returns: true
```

**Parameters:**

- `str` (string): The string to check.

**Returns:**

- (boolean): True if the string is a palindrome, false otherwise.

**Throws:**

- `TypeError`: If the input is not a string.

### Array Utilities

#### `removeDuplicates(arr)`

Removes duplicate values from an array.

```javascript
removeDuplicates([1, 2, 2, 3, 3, 3]); // Returns: [1, 2, 3]
removeDuplicates(['a', 'a', 'b']); // Returns: ['a', 'b']
```

**Parameters:**

- `arr` (Array): The array from which to remove duplicates.

**Returns:**

- (Array): A new array with duplicates removed.

**Throws:**

- `TypeError`: If the input is not an array.

#### `flattenArray(arr)`

Flattens a nested array.

```javascript
flattenArray([1, [2, [3, [4]]]]); // Returns: [1, 2, 3, 4]
flattenArray(['a', ['b', ['c']]]); // Returns: ['a', 'b', 'c']
```

**Parameters:**

- `arr` (Array): The array to flatten.

**Returns:**

- (Array): A new flattened array.

**Throws:**

- `TypeError`: If the input is not an array.

#### `findMax(arr)`

Finds the maximum value in an array.

```javascript
findMax([1, 2, 3, 4]); // Returns: 4
findMax([10, 5, 8, 3]); // Returns: 10
```

**Parameters:**

- `arr` (Array): The array to search for the maximum value.

**Returns:**

- (number): The maximum value in the array.

**Throws:**

- `TypeError`: If the input is not an array.

#### `chunkArray(arr, size)`

Splits an array into chunks of a specified size.

```javascript
chunkArray([1, 2, 3, 4, 5], 2); // Returns: [[1, 2], [3, 4], [5]]
chunkArray(['a', 'b', 'c', 'd'], 3); // Returns: [['a', 'b', 'c'], ['d']]
```

**Parameters:**

- `arr` (Array): The array to split into chunks.
- `size` (number): The size of each chunk.

**Returns:**

- (Array): A new array with the original array split into chunks.

**Throws:**

- `TypeError`: If the first parameter is not an array or the second parameter is not a number.

#### `findMin(arr)`

Finds the minimum value in an array.

```javascript
findMin([1, 2, 3, 4]); // Returns: 1
findMin([10, 5, 8, 3]); // Returns: 3
```

**Parameters:**

- `arr` (Array): The array to search for the minimum value.

**Returns:**

- (number): The minimum value in the array.

**Throws:**

- `TypeError`: If the input is not an array.

#### `sumArray(arr)`

Sums all the values in an array.

```javascript
sumArray([1, 2, 3, 4]); // Returns: 10
sumArray([5, 5, 5]); // Returns: 15
```

**Parameters:**

- `arr` (Array): The array to sum.

**Returns:**

- (number): The sum of all values in the array.

**Throws:**

- `TypeError`: If the input is not an array.

#### `averageArray(arr)`

Calculates the average of all values in an array.

```javascript
averageArray([1, 2, 3, 4]); // Returns: 2.5
averageArray([5, 5, 5, 5]); // Returns: 5
```

**Parameters:**

- `arr` (Array): The array to calculate the average.

**Returns:**

- (number): The average of all values in the array.

**Throws:**

- `TypeError`: If the input is not an array.

#### `uniqueArray(arr)`

Filters out duplicate values from an array.

```javascript
uniqueArray([1, 2, 2, 3, 3, 3]); // Returns: [1, 2, 3]
uniqueArray(['a', 'a', 'b']); // Returns: ['a', 'b']
```

**Parameters:**

- `arr` (Array): The array to filter for unique values.

**Returns:**

- (Array): A new array with only unique values.

**Throws:**

- `TypeError`: If the input is not an array.

#### `arrayDifference(arr1, arr2)`

Computes the difference between two arrays.

```javascript
arrayDifference([1, 2, 3], [2, 4]); // Returns: [1, 3]
arrayDifference(['a', 'b'], ['b', 'c']); // Returns: ['a']
```

**Parameters:**

- `arr1` (Array): The first array.
- `arr2` (Array): The second array.

**Returns:**

- (Array): A new array with elements from the first array that are not in the second array.

**Throws:**

- `TypeError`: If either input is not an array.

### Date Utilities

#### `formatDate(date)`

Formats a given date object into a string in the format 'YYYY-MM-DD'.

```javascript
formatDate(new Date()); // Returns: '2025-01-11'
```

#### `getDaysDifference(date1, date2)`

Calculates the absolute difference in days between two dates.

```javascript
getDaysDifference('2025-01-01', '2025-01-11'); // Returns: 10
```

#### `isWeekend(date)`

Checks if a given date falls on a weekend (Saturday or Sunday).

```javascript
isWeekend('2025-01-11'); // Returns: true
```

#### `getDay(date)`

Gets the day of the month from a given date.

```javascript
getDay('2025-01-11'); // Returns: 11
```

#### `getMonth(date)`

Gets the month from a given date.

```javascript
getMonth('2025-01-11'); // Returns: 1
```

#### `getYear(date)`

Gets the year from a given date.

```javascript
getYear('2025-01-11'); // Returns: 2025
```

## Development

### Cloning the Repository

Clone the repository locally:

```bash
git clone https://github.com/bakemono-san/utilities.git
```

### Running Tests

Install the dependencies:

```bash
npm install
```

Run the tests:

```bash
npm test
```

### Testing Locally

Use `npm link` to test your package locally:

```bash
npm link
cd path/to/your/test/project
npm link @bakemono-san/utilities
```

## Contributing

Contributions are welcome! This project is participating in **Hacktoberfest 2025**, so it's a great time to get involved. Please read our [Hacktoberfest section](#-hacktoberfest-2025) above for specific guidance on contributing during the event.

### General Contribution Guidelines

1. Please open an issue first to discuss any major changes
2. Follow the existing code style and patterns
3. Add tests for any new functionality
4. Update documentation as needed
5. Make sure all tests pass before submitting a PR

### Code Style

- Use ES6+ features where appropriate
- Follow JSDoc conventions for function documentation
- Include proper error handling with descriptive error messages
- Write clear, descriptive variable and function names

We appreciate all contributions, whether they're bug reports, feature requests, documentation improvements, or code contributions!

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---
