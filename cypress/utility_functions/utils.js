export const generateRandomNegativeInt = seed => {
  return Math.floor(Math.random() * seed + 1) * -1;
};

export const generateRandomPositiveInt = seed => {
  return Math.floor(Math.random() * seed + 1);
};

export const generateRandomPositiveFloat = seed => {
  return Math.random() * seed + 1.1;
};

export const generateRandomNegativeFloat = seed => {
  return Math.random() * seed * -1 - 1.1;
};

export const generateRandomLetter = () => {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

export const generateRandomDigitWithZeroesUpfront = seed => {
  return '000000'.concat(generateRandomPositiveInt(seed).toString());
};