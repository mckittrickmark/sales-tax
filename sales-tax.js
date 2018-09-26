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

var calculateSalesTax = function(salesData, taxRates) {
  companyContainer = {}
  existingCompany = []
  for (result in salesData) {
    var provinceResult = salesData[result]
    var companyName = provinceResult["name"]
    if (!existingCompany.includes(salesData[result]["name"])) {
      existingCompany.push(provinceResult["name"])
      companyContainer[provinceResult["name"]] = {
        totalSales: 0,
        totalTaxes: 0
      }
    }
    var tempSales = sumArray(provinceResult["sales"])
    var taxRate = findTaxRate(provinceResult["province"])
    var tempTaxes = tempSales * taxRate

    companyContainer[companyName]["totalSales"] += tempSales
    companyContainer[companyName]["totalTaxes"] += tempTaxes
  }
  return companyContainer
}

var findTaxRate = function(province) {
  return salesTaxRates[province]
}

var sumArray = function(array) {
  total = 0
  for (i in array) {
    total += array[i]
  }
  return total
}

var results = calculateSalesTax(companySalesData, salesTaxRates)

console.log(results)

