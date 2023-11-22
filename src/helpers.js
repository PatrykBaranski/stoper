export const convertMsToTimeString = (ms) => {
  const indexOfHours = 11;
  const indexOFMilliseconds = 22;

  return new Date(ms).toISOString().slice(indexOfHours, indexOFMilliseconds);
};
