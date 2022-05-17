export default function timeConverter(time) {
  const hours = Math.floor(time / 60);
  const minutes = time % 60;

  return `${hours} hours ${minutes} mins`;
}
