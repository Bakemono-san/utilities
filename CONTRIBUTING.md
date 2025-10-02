# Contributing to @bakemono-san/utilities

Thank you for your interest in contributing to this project! We welcome contributions from developers of all skill levels. This document provides guidelines and information on how to contribute effectively.

## 🎃 Hacktoberfest 2025

This repository is proudly participating in **Hacktoberfest 2025**! We encourage developers to contribute during this event and throughout the year.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Contribution Guidelines](#contribution-guidelines)
- [Code Style](#code-style)
- [Testing](#testing)
- [Documentation](#documentation)
- [Pull Request Process](#pull-request-process)
- [Issue Guidelines](#issue-guidelines)
- [Recognition](#recognition)

## Code of Conduct

By participating in this project, you agree to abide by our code of conduct:

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on constructive feedback
- Respect different viewpoints and experiences
- Show empathy towards other community members

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Git
- A GitHub account

### Fork and Clone

1. **Fork** the repository on GitHub
2. **Clone** your fork locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/utilities.git
   cd utilities
   ```
3. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/Bakemono-san/utilities.git
   ```

## How to Contribute

### Types of Contributions

We welcome various types of contributions:

#### 🐛 Bug Fixes
- Report bugs by opening an issue
- Fix existing bugs with clear, focused pull requests

#### ✨ New Features
- **New utility functions**: Add functions that follow our existing patterns
- **Performance improvements**: Optimize existing functions
- **API enhancements**: Improve function interfaces while maintaining backward compatibility

#### 📚 Documentation
- Improve README.md
- Enhance JSDoc comments
- Add usage examples
- Create tutorials or guides

#### 🧪 Testing
- Add test cases for existing functions
- Improve test coverage
- Add edge case tests

#### 🎨 Code Quality
- Refactor code for better readability
- Improve error handling
- Optimize performance

## Development Setup

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run tests** (when available):
   ```bash
   npm test
   ```

3. **Link locally** for testing:
   ```bash
   npm link
   cd /path/to/test/project
   npm link @bakemono-san/utilities
   ```

## Contribution Guidelines

### Before You Start

1. **Check existing issues** to avoid duplicate work
2. **Open an issue** for major changes to discuss the approach
3. **Keep changes focused** - one feature/fix per pull request
4. **Follow existing patterns** in the codebase

### Function Requirements

When adding new utility functions:

#### Structure
- Place functions in appropriate files (`string.js`, `array.js`, `date.js`, etc.)
- Export functions using ES6 export syntax
- Follow the existing file organization

#### Documentation
- Include comprehensive JSDoc comments
- Document all parameters with types
- Document return values
- Document thrown exceptions
- Provide usage examples

#### Error Handling
- Validate input parameters
- Throw `TypeError` with descriptive messages for invalid inputs
- Handle edge cases gracefully

#### Example Function Template
```javascript
/**
 * Brief description of what the function does.
 *
 * @param {type} paramName - Description of the parameter.
 * @returns {type} Description of the return value.
 * @throws {TypeError} When and why this error is thrown.
 * @example
 * functionName(exampleInput); // Returns: expectedOutput
 */
export const functionName = (paramName) => {
    // Input validation
    if (typeof paramName !== 'expectedType') {
        throw new TypeError('Descriptive error message');
    }
    
    // Function logic
    return result;
};
```

## Code Style

### JavaScript Style Guide

- **ES6+**: Use modern JavaScript features
- **Const/Let**: Prefer `const`, use `let` when reassignment is needed
- **Arrow Functions**: Use arrow functions for short, inline functions
- **Template Literals**: Use template literals for string interpolation
- **Destructuring**: Use destructuring for cleaner code when appropriate

### Naming Conventions

- **Functions**: Use camelCase (`formatDate`, `removeDuplicates`)
- **Variables**: Use camelCase (`userInput`, `resultArray`)
- **Constants**: Use UPPER_SNAKE_CASE for module-level constants
- **Files**: Use camelCase or kebab-case consistently

### Code Formatting

- **Indentation**: 4 spaces (no tabs)
- **Semicolons**: Use semicolons consistently
- **Quotes**: Use single quotes for strings
- **Line Length**: Keep lines under 100 characters when possible

## Testing

Currently, the project uses a simple test setup. When contributing:

1. **Test your functions** manually with various inputs
2. **Test edge cases** (empty inputs, null, undefined, invalid types)
3. **Verify error handling** works as documented
4. **Test with real-world examples**

### Future Testing Framework

We plan to implement a comprehensive testing framework. Contributors interested in setting up:
- Jest or Mocha for testing
- Test coverage reporting
- Automated testing in CI/CD

This would be a valuable contribution!

## Documentation

### JSDoc Standards

Use JSDoc for all public functions:

```javascript
/**
 * Brief, clear description.
 *
 * @param {string} input - What this parameter is for.
 * @param {number} [optional] - Optional parameter description.
 * @returns {boolean} What the function returns.
 * @throws {TypeError} When invalid input is provided.
 * @example
 * // Basic usage
 * functionName('test'); // Returns: true
 * 
 * @example
 * // Edge case
 * functionName(''); // Returns: false
 */
```

### README Updates

When adding new functions:
1. Add the function to the appropriate section in README.md
2. Include usage examples
3. Update the table of contents if needed

## Pull Request Process

### Before Submitting

1. **Sync with upstream**:
   ```bash
   git fetch upstream
   git checkout main
   git merge upstream/main
   ```

2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes** following the guidelines above

4. **Test thoroughly** - ensure your changes work as expected

5. **Commit with descriptive messages**:
   ```bash
   git commit -m "feat: add new string utility function for URL validation"
   ```

### Commit Message Format

Use conventional commit format:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation changes
- `style:` for code style changes
- `refactor:` for code refactoring
- `test:` for adding tests
- `chore:` for maintenance tasks

### Pull Request Template

When opening a pull request:

1. **Clear title** describing the change
2. **Description** explaining what and why
3. **Reference related issues** using #issue-number
4. **List changes** made
5. **Testing information** - how you tested the changes

Example PR description:
```markdown
## Description
Adds a new utility function `isValidEmail()` to validate email addresses.

## Related Issue
Fixes #123

## Changes Made
- Added `isValidEmail()` function to `string.js`
- Added comprehensive JSDoc documentation
- Updated README.md with usage examples

## Testing
- Tested with various valid email formats
- Tested with invalid inputs
- Verified error handling works correctly
```

## Issue Guidelines

### Reporting Bugs

When reporting bugs, include:
- **Clear title** describing the issue
- **Steps to reproduce** the bug
- **Expected behavior** vs actual behavior
- **Environment details** (Node.js version, OS, etc.)
- **Code samples** demonstrating the issue

### Feature Requests

For feature requests, include:
- **Clear description** of the proposed feature
- **Use case** - why this feature would be valuable
- **Examples** of how it would be used
- **Implementation ideas** (if you have any)

### Issue Labels

We use labels to categorize issues:
- `bug` - Something isn't working
- `enhancement` - New feature or improvement
- `documentation` - Documentation needs improvement
- `good first issue` - Good for newcomers
- `hacktoberfest` - Hacktoberfest-eligible issues
- `help wanted` - Community help needed

## Recognition

### Contributors

All contributors will be recognized in our documentation and repository. Significant contributions may be highlighted in release notes.

### Hacktoberfest

Valid Hacktoberfest contributions will be labeled appropriately and count toward the event goals.

## Questions?

If you have questions about contributing:

1. **Check existing issues** and discussions
2. **Open a new issue** with the `question` label
3. **Reach out** to maintainers through GitHub

## Thank You!

Thank you for contributing to @bakemono-san/utilities! Your contributions help make this library better for everyone. Whether you're fixing a typo, adding a new feature, or improving documentation, every contribution is valuable and appreciated.

Happy coding! 🚀