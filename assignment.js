// Problem-1: Solution
function feetToMile(feet){
    var mile = feet * 0.000189394;
    console.log(mile.toFixed(9));
}
feetToMile(5);

// Problem-2: Solution
function woodCalculator(c, t, b){
    var chairMeasure = 1 * c;
    var tableMeasure = 3 * t;
    var bedMeasure = 5 * b;
    var totalWoodMeasure = chairMeasure + tableMeasure + bedMeasure;
    console.log(totalWoodMeasure);
}
woodCalculator(5,5,10);

// problem-3: Solution
function brickCalculator(floor)
{
if(floor <= 10)
{
   var height = floor * 15;
   return brick = height * 1000;
}
else if(floor > 10 && floor <= 20)
{
    var height =(10 * 15) + (floor - 10) * 12;
    return brick = height * 1000;
}
else(floor > 20)
{
    var height = (10*15) + (10*12) + (floor - 20) * 10;
    return brick = height * 1000;
}
}
console.log(brickCalculator(11));

// problem-4: solution

