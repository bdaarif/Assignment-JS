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