const POINTS_STAGES = [
  {
    overPrice: 100,
    pointsPerDollar: 2
  },
  {
    overPrice: 50,
    pointsPerDollar: 1
  }
];

function calculatePoints(price) {
  let currentPrice = Math.floor(price);
  let points = 0;
  POINTS_STAGES.forEach(({ overPrice, pointsPerDollar }) => {
    if (currentPrice > overPrice) {
      const priceDelta = currentPrice - overPrice;
      points += priceDelta * pointsPerDollar;
      currentPrice = overPrice;
    }
  });
  return points;
}

export default calculatePoints;
