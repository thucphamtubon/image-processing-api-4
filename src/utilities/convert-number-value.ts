export const convertNumberValue = (value: string): number | boolean => {
  let numberValue = +value;

  if (isNaN(numberValue)) return false;

  numberValue = Math.floor(numberValue);

  if (numberValue < 1) return false;

  return numberValue;
};
