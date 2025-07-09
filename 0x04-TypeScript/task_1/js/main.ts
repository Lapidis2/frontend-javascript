interface Teacher{
	readonly firstName: string;
	readonly lastName: string;
    fullTimeEmployee:boolean;
	yearsOfExperience:number;
	location?: string;
	[key: string]: any; 
	contract?: boolean;
}
const teacher3: Teacher = {
	firstName: 'John',
	fullTimeEmployee: false,
	yearsOfExperience:3,
	lastName: 'Doe',
	location: 'London',
	contract: false,
  };
  interface Directors extends Teacher{
	numberOfReports: number;
  }
  const director1: Directors = {
	firstName: 'John',
	lastName: 'Doe',
	yearsOfExperience: 2,
	location: 'London',
	fullTimeEmployee: true,
	numberOfReports: 17,
  };
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

const printTeacher:printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
}


interface StudentConstructor {
	firstName: string;
	lastName: string;
  } 
  interface StudentClassInterface {
	workOnHomework(): string;
	displayName(): string;
  }


  class StudentClass implements StudentClassInterface {
	firstName: string;
	lastName: string;
  
	constructor({ firstName, lastName }: StudentConstructor) {
	  this.firstName = firstName;
	  this.lastName = lastName;
	}
  
	workOnHomework(): string {
	  return 'Currently working';
	}
  
	displayName(): string {
	  return this.firstName;
	}
  }
const student1 = new StudentClass({ firstName: 'jean', lastName: 'pierre' });
console.log(student1.workOnHomework());
console.log(student1.displayName());
  
















printTeacher("jean", "pierre") 
  console.log(director1);
  
  console.log(teacher3);