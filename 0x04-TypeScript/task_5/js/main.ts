
const majorBrand: unique symbol = Symbol('MajorCredits');
const minorBrand: unique symbol = Symbol('MinorCredits');


export interface MajorCredits {
  credits: number;
  readonly __majorBrand: typeof majorBrand;
}


export interface MinorCredits {
  credits: number;
  readonly __minorBrand: typeof minorBrand;
}


export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __majorBrand: majorBrand
  };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __minorBrand: minorBrand
  };
}
