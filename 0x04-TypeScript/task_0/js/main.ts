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
headerFirstName.textContent="First Name";
const headerLocation=document.createElement("th");
headerLocation.textContent="Location";
headerRow.appendChild(headerFirstName);
headerRow.appendChild(headerLocation);
table.appendChild(headerRow);
studentList.forEach((student)=>{
	const row=document.createElement("tr")
	const nameCell=document.createElement("td")
	nameCell.textContent=student.firstName
    const locationCell=document.createElement("td")
	locationCell.textContent=student.location
	row.appendChild(nameCell)
	row.appendChild(locationCell)
	table.appendChild(row)
})
document.body.appendChild(table)