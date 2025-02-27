export const getFirstLetters = (username: string) => {
  const firstLettersArr: string[] = [];
  const words = username.split(' ');

  words.forEach((word) => firstLettersArr.push(word[0]));

  return firstLettersArr.join('');
};
