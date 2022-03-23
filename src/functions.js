export const getTime = (timestamp) => {
  const time = new Date(timestamp);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return `${('0' + hours).slice(-2)}:${('0' + minutes).slice(-2)}`;
}