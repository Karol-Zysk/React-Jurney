export const cost = (fuelPrice, consumption, distance) =>
  Math.round(((fuelPrice * consumption) / 100) * parseInt(distance / 1000));

export const howLong = (distance) => Math.ceil(distance / 800000);
