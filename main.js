// we will feed peoples responses into this variable but for now I just declare values
let outdoorsExtent = 1;
let handsOnExtent = 1;
let technologyExtent = 4;
let previousSalary = 1;

// convert from 1 to 5 scale to -1 to 1 scale by subtracting 3 and dividing by 2
[outdoorsExtent, handsOnExtent, technologyExtent] = [outdoorsExtent, handsOnExtent, technologyExtent].map(x => x = (x-3)/2 );
 console.log([outdoorsExtent, handsOnExtent, technologyExtent, previousSalary]);