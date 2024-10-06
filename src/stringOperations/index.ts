import { FullName, PercentCalculator } from "./types";

export const stringDoesNotExist = (str: unknown | string | number): boolean =>
  typeof str !== 'string' || str?.length === 0 || /^\s*$/.test(str) || !str?.trim();

/**
 *converts slug to string
 * @param slug the slug to convert to normal string
 * @param dash the slug pattern
 * @returns {string} the converted normal string
 */
export const slugToString = (slug: string, dash: string = '_'): string => {
  const result = slug.split(dash);
  for (let i = 0; i < result.length; ) {
    const word = result[i];
    result[i] = word.charAt(0).toUpperCase() + word.slice(1);
    i += 1;
  }
  const text = result.join(' ');
  text.replace('alt', '');
  return text.replace('id', '');
};

/**
 *converts camelCase to strings
 * @param camelCase
 * @returns {string}
 */

export const camelToString = (camelCase: string): string =>
  camelCase
    .replace(/\W+/g, ' ')
    .replace(/([a-z\d])([A-Z])/g, '$1 $2')
    .toLowerCase()
    .replace('id', '');

/**
 * Converts a given string into a slug by replacing spaces with a specified character.
 *
 * @param string - The input string to be slugified.
 * @param dash - The character to replace spaces with. Defaults to '_'.
 * @returns The slugified string.
 */
export const slugify = (string: string, dash: string = '_'): string =>
  !stringDoesNotExist(string) && string.replace(' ', dash);


/**
 * Extracts a name from a full name string based on the provided index.
 * 
 * @param fullName - The full name string from which to extract a name.
 * @param index - The index of the name to extract from the full name string. Defaults to 0.
 * @returns The extracted name at the specified index, or an empty string if the full name is invalid.
 */
export const getOneName = (fullName: string, index: number = 0): string => {
  if (stringDoesNotExist(fullName)) {
    return '';
  }
  const names = fullName.split(' ');
  return  names[index];
};

/**
 * @param {number} den :
 * denominator, full amount
 * @param {number} num :
 * numerator, current amount.
 * @param {number} percent: optional percent value
 * @param {boolean} complete: should show complete instead of value above 100%
 * @returns {string} percentage || complete || num || 0.
 */
export const percentCalculator = ({ den, num, percent, complete = true }: PercentCalculator): string => {
 
  let value = '0%';
  if (!isNaN(percent) && !isNaN(den) && isNaN(num)) 
    value = ((percent * den) / 100).toLocaleString();
  else if (!isNaN(percent) && !isNaN(num) && isNaN(den))
    value = ((100 * num) / percent).toLocaleString();
  
  else if (!isNaN(num) && !isNaN(den)) {
    const results = (num / den) * 100;
    if (complete) {
      value = results > 101 ? 'Fully' : `${results.toFixed(0)}%`;
    } else {
      value = `${value}%`;
    }
  }
  return value;
};

/**
 *  converts locale string to number
 * @param {string} str :
 * @returns {number} || 0.
 */
export const localStringToNumber = (string: string): number => {
  if (stringDoesNotExist(string)) {
    return 0;
  }
  return parseFloat(string.replace(/\D/g, ''));
};

/**
 *  converts locale string to number
 * @param {string} str :
 * @param {function} callback :
 * @returns {number} || 0.
 */
export const copyText = ({ str, callback }: { str: string; callback: Function }): void => {
  if (stringDoesNotExist(str)) {
    return;
  }
  navigator.clipboard.writeText(str).then(() => {
    callback();
  });
}

export const stringCaps = (string) => {
  if (!stringDoesNotExist(string)) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  return string;
};

/** capitalizes the first letter of each word in a sentence
 * @param {string} text: the text to capitalize
 * @returns {string} the capitalized text
 */
export const sentenceCaps = (text: string): string => {
  if (stringDoesNotExist(text)) {
   return text;
  }
  text.replace(/(^\s*)|(\s*$)/gi, '');
  text.replace(/[ ]{2,}/gi, ' ');
  text.replace(/\n /, '\n');
  const words = text.split(' ');
  return words.map((word) => stringCaps(word).toString()).join(' ');
};


export const removeCommas = (str: string): string => !stringDoesNotExist(str) && str.replace(/[^\d.]/g, '');

/**
 *removes comas (,) and converts to integers.
 * especially used to convert currency amount to numbers
 * @param {string}  amount: the string to convert to number.
 * @returns {number}.
 */
export const formatDonation = (amount: string): number => Number(removeCommas(amount));

/**
 *splits full name to first, middle, and last names.
 * @param {string}  fullName: the string to spit.
 * @returns {alert || object}.
 */
export const splitFullName = (fullName: string): FullName => {
  if (stringDoesNotExist(fullName)) {
    return;
  }
  const arr = fullName.split(' ');
  let result = {
    firstName: arr[0], 
    middleName: '',    
    lastName:arr[arr.length - 1],
  };
  if (arr.length > 2) {
    result = { ...result, middleName: arr[1] };
  }
  return result;
};

