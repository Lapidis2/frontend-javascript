interface Student{
	firstName:string;
	lastName:string;
	age:number;
	location:string
}
const student1:Student={
	firstName:"jean",
	lastName:"pierre",
	age:20,
	location:"Kigali"
}
const student2:Student={
	firstName:"alice",
	lastName:"mukamana",
	age:22,
	location:"Musanze"
}
const studentList:Student[]=[student1,student2];
const table=document.createElement("table")
const headerRow=document.createElement("tr");
const headerFirstName=document.createElement("th");
const headerLastName=document.createElement("th");