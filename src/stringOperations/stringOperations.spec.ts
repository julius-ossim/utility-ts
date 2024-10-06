// generate test cases for all the functions in the stringOperations module

import { slugToString, camelToString, slugify, getOneName, percentCalculator, formatDonation, splitFullName, removeCommas, copyText, localStringToNumber } from './index';


describe('stringOperations', () => {
  describe('slugToString', () => {
    it('should convert slug to string', () => {
      expect(slugToString('hello-world')).toBe('Hello World');
    });
    it('should convert slug to string with custom dash', () => {
      expect(slugToString('hello_world', '_')).toBe('Hello World');
    });
  });

  describe('camelToString', () => {
    it('should convert camelCase to strings', () => {
      expect(camelToString('helloWorld')).toBe('hello world');
    });
  });

  describe('slugify', () => {
    it('should convert a string into a slug', () => {
      expect(slugify('hello world')).toBe('hello_world');
    });
    it('should convert a string into a slug with custom dash', () => {
      expect(slugify('hello world', '-')).toBe('hello-world');
    });
  });

  describe('getOneName', () => {
    it('should extract a name from a full name string based on the provided index', () => {
      expect(getOneName('John Doe')).toBe('John');
    });
    it('should extract a name from a full name string based on the provided index', () => {
      expect(getOneName('John Doe', 1)).toBe('Doe');
    });
  });

  describe('percentCalculator', () => {
    it('should calculate percentage when numerator and denominator are provided', () => {
      expect(percentCalculator({den: 100, num: 50})).toBe('50%');
    });
    it('should calculate the numerator when denominator and percent are provided', () => {
      expect(percentCalculator({den: 100, percent: 50})).toBe('50');
    });
    it('should calculate the denominator when numerator and percent are provided', () => {
      expect(percentCalculator({num: 50, percent: 50})).toBe('100');
    });
    it('should calculate the percentage when complete is true', () => {
      expect(percentCalculator({den: 50, num: 100, complete: true})).toBe('Fully');
    });
  });

  describe('formatDonation', () => {
    it('should format donation', () => {
      expect(formatDonation('1000')).toBe('$1,000.00');
    });
  });
  describe('splitFullName', () => {
    it('should split full name', () => {
      expect(splitFullName('John Doe')).toEqual({ firstName: 'John', middleName: '', lastName: 'Doe' });
    });
    it('should split full name with middle name', () => {
      expect(splitFullName('John Doe, Jr.')).toEqual({ firstName: 'John', middleName: 'Doe', lastName: 'Jr' });
    });
  });

  describe('removeCommas', () => {
    it('should remove commas', () => {
      expect(removeCommas('1,000')).toBe('1000');
    });
  });

  describe('copyText', () => {
    it('should copy text', () => {
      expect(copyText({str: 'hello', callback: () => console.log('hello')})).toBe('hello');
    });
  });
  describe('localStringToNumber', () => {
    it('should convert string to number', () => {
      expect(localStringToNumber('1000')).toBe(1000);
    });
  });
});