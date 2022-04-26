export default (str, ...holes) => {
  let result = str[0];
  for (let i = 1; i < str.length; i++) {
    result += holes[i - 1];
    result += str[i];
  }
  return result;
};
