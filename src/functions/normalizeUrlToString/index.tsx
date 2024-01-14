export default function normalizeUrlToString(string: string) {
  const word = decodeURI(string).toLocaleLowerCase();
  return word;
}
