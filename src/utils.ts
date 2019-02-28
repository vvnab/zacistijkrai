const declOfNum = (number: number, titles: Array<string>): string => {
  // русские числительные
  // titles = 1,2,5 [пень, пня, пней]
  const cases = [2, 0, 1, 1, 1, 2];
  return titles[
    number % 100 > 4 && number % 100 < 20
      ? 2
      : cases[number % 10 < 5 ? number % 10 : 5]
  ];
};

export { declOfNum };
