// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// Create 2 tests that should be true, and 2 tests that should be false for each function 
// (4 tests x 5 functions = 20 tests)

// Is Phone Number

/**
 * Valid phone numbers format:
 * (123) 123-1234
 * (123)123-1234
 * 123 123-1234
 * 123-123-1234
 * 123-1234
 * 
 * const phoneRegex = /((\(\d{3}\) ?)|(\d{3}-))?\d{3}-\d{4}/;
 * 1. /((\(\d{3}\) ?)|(\d{3}-))? = optional parentheses/area code
 *    a. First OR (\(\d{3}\) ?) = 3 digits in parentheses followed by an optional space
 *    b. Second OR (\d{3}-) = 3 digits (no paranthesis) followed by a hyphen
 * 2. \d{3}-\d{4} = 3 digits followed by a hyphen and 4 digits
 */
test('(123) 123-1234 is valid', () => {
  expect(isPhoneNumber('(123) 123-1234')).toBe(true);
});

test('123-1234 is valid', () => {
  expect(isPhoneNumber('123-1234')).toBe(true);
});

test('1231231234 is not valid', () => {
  expect(isPhoneNumber('1231231234')).toBe(false);
});

test('123 1234 is not valid', () => {
  expect(isPhoneNumber('123 1234')).toBe(false);
});

//Is Email

/**
 * Valid email format:
 * name@ucsd.com
 * name_123@ucsd_id.edu
 * 
 * const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
 * ^\ = start of string
 * 1. w+ = starts with one or more word characters (letters, digits, or underscores)
 * 2. @ = followed by an '@' symbol
 * 3. [a-zA-Z_]+? = followed by one or more letters or underscores (domain name)
 * 4. \. = followed by a dot '.'
 * 5. [a-zA-Z]{2,3}$ = ends with 2 to 3 letters (top-level domain like .com)
 * $ = end of string
 */

test('name@ucsd.com is valid', () => {
  expect(isEmail('name@ucsd.com')).toBe(true);
});

test('name_123@ucsd_id.edu is valid', () => {
  expect(isEmail('name_123@ucsd_id.edu')).toBe(true);
});

test('name.123@ucsd.com is not valid', () => {
  expect(isEmail('name.123@ucsd.com')).toBe(false);
});

test('name@.com is not valid', () => {
  expect(isEmail('name@.com')).toBe(false);
});

//Is Strong Password

/**
 * Valid strong password format:
 * abbbb123
 * a_a_b_1234
 * 
 * const pwRegex = /^[a-zA-Z]\w{3,14}$/;
 * ^ = start of string
 * [a-zA-Z] = starts with a letter (uppercase or lowercase)
 * \w{3,14} = followed by 3 to 14 word characters
 *     a. \w includes letters, digits, and underscores
 * $ = end of string
 */

test('abbbb123 is valid', () => {
  expect(isStrongPassword('abbbb123')).toBe(true);
});

test('a_a_b_1234 is valid', () => {
  expect(isStrongPassword('a_a_b_1234')).toBe(true);
});

test('a!!!! is not valid', () => {
  expect(isStrongPassword('a!!!!')).toBe(false);
});

test('aaaaaaaaaaaaaaaaaaaaaaa is not valid', () => {
  expect(isStrongPassword('aaaaaaaaaaaaaaaaaaaaaaa')).toBe(false);
});

// Is Date
/**
 * Valid date format:
 * XX / XX / YYYY
 * X / XX / YYYY
 * XX / X / YYYY
 * 
 * const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
 * ^ = start of string
 * \d{1,2} = 1 or 2 digits for the day
 * \/ = followed by a forward slash '/'
 * \d{1,2} = 1 or 2 digits for the month
 * \/ = followed by another forward slash '/'
 * \d{4} = 4 digits for the year
 * $ = end of string
 */

test('03/12/2025 is valid', () => {
  expect(isDate('03/12/2025')).toBe(true);
});

test('3/12/2025 is valid', () => {
  expect(isDate('3/12/2025')).toBe(true);
});

test('03/12/25 is not valid', () => {
  expect(isDate('03/12/25')).toBe(false);
});

test('/12/2025 is not valid', () => {
  expect(isDate('/12/2025')).toBe(false);
});

// Is Hex Color

/**
 * Valid hex color format:
 * #2A47D9
 * #FFF
 * 
 * const colorRegex = /^\#?[A-Fa-f0-9]{3}([A-Fa-f0-9]{3})?$/;
 * # = optional '#' at the start
 * [A-Fa-f0-9]{3} = 3 hexadecimal characters (0-9, A-F, a-f)
 * ([A-Fa-f0-9]{3})? = optional 3 more hexadecimal characters (for 6-character hex codes)
 */


test('#2A47D9 is valid', () => {
  expect(isHexColor('#2A47D9')).toBe(true);
});

test('fff is valid', () => {
  expect(isHexColor('fff')).toBe(true);
});

test('a is not valid', () => {
  expect(isHexColor('a')).toBe(false);
});

test('#a!34 is not valid', () => {
  expect(isHexColor('#a!34')).toBe(false);
});
