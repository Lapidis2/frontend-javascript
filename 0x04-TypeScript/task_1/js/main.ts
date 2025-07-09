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
  
  console.log(teacher3);