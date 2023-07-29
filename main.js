let roleData = [
	{
    name: "Solar Panel Installer",
    salaryRange: { low: 34000, medium: 40900, high: 62400 },
    outdoorsExtent: 1,
    handsOnExtent: 1,
    technologyExtent: 0.8,
  },
	{
    name: "Heat Pump Engineer",
    salaryRange: { low: 32500, medium: 35000, high: 43000 },
    outdoorsExtent: 0.8,
    handsOnExtent: 1,
    technologyExtent: 0.8,
  },
	{
    name: "EV Chargepoint Installer",
    salaryRange: { low: 34000, medium: 35500, high: 40500 },
    outdoorsExtent: 0.8,
    handsOnExtent: 1,
		technologyExtent: 1,
  },
	{
    name: "Retrofit Assessor",
    salaryRange: { low: 27500, medium: 32500, high: 40500 },
    outdoorsExtent: -1,
    handsOnExtent: -1,
		technologyExtent: 0,
  },
	{
    name: "Forester",
    salaryRange: { low: 23000, medium: 28400, high: 32500 },
    outdoorsExtent: 1,
    handsOnExtent: 0,
		technologyExtent: -1,
  },
	{
    name: "Soil Technician",
    salaryRange: { low: 22000, medium: 24000, high: 28500 },
    outdoorsExtent: 0.5,
    handsOnExtent: 0.2,
		technologyExtent: 0.5,
  },
	{
    name: "Water Operative",
    salaryRange: { low: 21900, medium: 23700, high: 31200 },
    outdoorsExtent: 0.2,
    handsOnExtent: 0.2,
    technologyExtent: 0.5,
  }
];

// we will feed peoples responses into these variables but for now I just declare values
let outdoorsExtent = 3;
let handsOnExtent = 3;
let technologyExtent = 3;
let previousSalary = 10000;

// convert from 1 to 5 scale to -1 to 1 scale by subtracting 3 and dividing by 2
[outdoorsExtent, handsOnExtent, technologyExtent] = [outdoorsExtent, handsOnExtent, technologyExtent].map(x => x = (x-3)/2 );


 // compare with each job and see create match score (lower is better min 0 max 6)



let FitArray = [0, 0, 0, 0, 0, 0, 0];

function fitcalculator(i){
 FitArray[i] = Math.abs(roleData[i].outdoorsExtent - outdoorsExtent) + Math.abs(roleData[i].handsOnExtent - handsOnExtent) + Math.abs(roleData[i].technologyExtent - technologyExtent);

};
for (let index = 0; index < 7; index++) {
  fitcalculator(index)
};
for (let index = 0; index < FitArray.length; index++) {
    roleData[index].matchscore = FitArray[index];    
}

//re-order array by how good match score is
roleData.sort((x, y) => x.matchscore-y.matchscore )

// Create an array that contains only the best 3 jobs by match score
let BestMatches = roleData.slice(0,3);
console.log(BestMatches);