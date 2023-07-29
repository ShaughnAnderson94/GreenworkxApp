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

// we will feed peoples responses into this variable but for now I just declare values
let outdoorsExtent = 3;
let handsOnExtent = 3;
let technologyExtent = 3;
let previousSalary = 10000;

// convert from 1 to 5 scale to -1 to 1 scale by subtracting 3 and dividing by 2
[outdoorsExtent, handsOnExtent, technologyExtent] = [outdoorsExtent, handsOnExtent, technologyExtent].map(x => x = (x-3)/2 );


 // compare with each job and see create fit number (lower is better)

let panelInstallFit = 0;
let heatPumpEngFit = 0;
let EVCPinstalFit = 0;
let RFassessorFit = 0;
let forresterFit = 0;
let SoilTechFit = 0;
let waterOpFit = 0;

let FitArray = [0, 0, 0, 0, 0, 0, 0];

function fitcalculator(i){
 FitArray[i] = Math.abs(roleData[i].outdoorsExtent - outdoorsExtent) + Math.abs(roleData[i].handsOnExtent - handsOnExtent) + Math.abs(roleData[i].technologyExtent - technologyExtent);
  panelInstallFit = FitArray[0];
  heatPumpEngFit = FitArray[1];
  EVCPinstalFit = FitArray[2];
  RFassessorFit = FitArray[3];
  forresterFit = FitArray[4];
  SoilTechFit = FitArray[5];
  waterOpFit = FitArray[6];
};
for (let index = 0; index < 7; index++) {
  fitcalculator(index)
};
console.log(FitArray);
console.log(panelInstallFit);
console.log(waterOpFit);

