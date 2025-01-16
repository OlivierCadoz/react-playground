export const deepClone = (value: Array<any> | Object) => {
  return JSON.parse(JSON.stringify(value));
};
