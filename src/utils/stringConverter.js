
export const stringConverter = (string) => {
  const stringArr = string.split('');
  const sortedArr = stringArr.sort();
  return sortedArr;
}