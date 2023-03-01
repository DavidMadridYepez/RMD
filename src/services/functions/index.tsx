export const reduceTitle = (title: string) => {
  if (title.length > 17) return title.slice(0, 18) + '...';
  else {
    return title;
  }
};

export const roundVoteAverage = (vote: number) => {
  return vote.toFixed(1);
};

export const makeDollar = (budget: number) => {
  let formatingOpttions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  };

  return Intl.NumberFormat('en-US', formatingOpttions).format(budget);
};
