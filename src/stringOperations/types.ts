
  export interface PercentCalculator {
    den?: number;
    num?: number;
    percent?: number;
    complete?: boolean;
  }
  export interface LocalStringToNumber {
    str: string;
  }
  export interface CopyText {
    str: string;
    callback: Function;
  }

  export interface FullName {
    firstName: string;
    middleName: string;
    lastName: string;
  }
  
  