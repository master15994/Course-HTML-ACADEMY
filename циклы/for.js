let totalPages = 6;
let consumptionTotal = 0;
let consumptionPerPage = 70;
let economyMode = true;

for (let page = 1; page <= totalPages; page++) {
  console.log(page);

  if (economyMode && page > 3) {
    consumptionTotal += consumptionPerPage * 0.5;
  } else {
    consumptionTotal += consumptionPerPage;
  }

  console.log(consumptionTotal);
}
