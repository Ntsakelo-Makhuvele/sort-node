
export const stringConverter = (string) => {
  const stringArr = string.split('');
  const newArray = stringArr.filter(item => item !== " ");
  const sortedArr = newArray.sort();
  return sortedArr;
}