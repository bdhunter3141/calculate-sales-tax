
var salesTaxRates = {
  AB: 0.05,
  BC: 0.12,
  SK: 0.10
};

var companySalesData = [
  {
    name: "Telus",
    province: "BC",
    sales: [ 100, 200, 400 ]
  },
  {
    name: "Bombardier",
    province: "AB",
    sales: [ 80, 20, 10, 100, 90, 500 ]
  },
  {
    name: "Telus",
    province: "SK",
    sales: [ 500, 100 ]
  }
];

var obj = {}

function totalSum(company) {
  var sales = companySalesData[company].sales
  var sum = 0
  for (var i =0; i < sales.length; i++)  {
  sum += sales[i]
  }
return sum
}

function calculateTotalTax(company) {
//capture companysaldesdata of each province in variable
//loop thorugh saletaxrates and compare variable name to sales taxrates using for in
//store the value in a variable
//multiply the value by the result of totalsales
var province = companySalesData[company].province
var taxRate = 0

for (var taxNumber in salesTaxRates) {
  if (taxNumber === province) {
      taxRate = salesTaxRates[taxNumber]
  }
}
return taxRate * totalSum(company)
}

function companyObject(salesData, taxRates, companyName) {

   obj[companyName] = {
    salesData,
    taxRates
  }

return obj.companyName
}

companyObject(totalSum(0), calculateTotalTax(0), companySalesData[0].name)
companyObject(totalSum(1), calculateTotalTax(1), companySalesData[1].name)
companyObject(totalSum(2), calculateTotalTax(2), companySalesData[2].name)

console.log(obj)