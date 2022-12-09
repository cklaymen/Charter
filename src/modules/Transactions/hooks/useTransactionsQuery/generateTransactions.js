const NUMBER_OF_TRANSACTIONS = 100;
const MIN_PRICE_VALUE = 5;
const MAX_PRICE_VALUE = 225;
const DATE_MONTH_DELTA = 3;

const customers = [
  "Kowalski",
  "Nowak",
  "Smith",
  "Watkins",
  "Coleman",
  "Barry",
  "Rose",
  "Farmer"
];

function getRandomCustomer() {
  const index = Math.round(Math.random() * (customers.length - 1));
  return customers[index];
}

function getTimeDelta() {
  const now = new Date();
  const date3MonthsAgo = new Date(now.getTime());
  date3MonthsAgo.setMonth(date3MonthsAgo.getMonth() - DATE_MONTH_DELTA);
  const timeDelta = now.getTime() - date3MonthsAgo.getTime();
  return {
    nowTime: now.getTime(),
    timeDelta
  };
}

function getRandomDate(nowTime, timeDelta) {
  return new Date(nowTime - Math.round(Math.random() * timeDelta));
}

function generateTransactions() {
  const transactions = [];
  const { nowTime, timeDelta } = getTimeDelta();
  for (let i = 0; i < NUMBER_OF_TRANSACTIONS; i++) {
    const customer = getRandomCustomer();
    transactions.push({
      id: i,
      date: getRandomDate(nowTime, timeDelta),
      customer,
      price:
        Math.round(
          (Math.random() * (MAX_PRICE_VALUE - MIN_PRICE_VALUE) +
            MIN_PRICE_VALUE) *
            100
        ) / 100
    });
  }
  return transactions.sort((a, b) => a.date.getTime() - b.date.getTime());
}

export default generateTransactions;
