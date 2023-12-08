export function normalizePhone(value: string) {
  if (!value) return value;

  const phoneNumber = value.replace(/[^\d]/g, "");
  const phoneLength = phoneNumber.length;

  if (phoneLength < 3) {
    return phoneNumber;
  } else if (phoneLength < 6) {
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
  } else {
    const areaCode = phoneNumber.slice(0, 2);
    const prefix = phoneNumber.slice(2, 7);
    const suffix = phoneNumber.slice(7, 11);

    let formattedNumber = `(${areaCode}) ${prefix}`;

    if (suffix) {
      formattedNumber += `-${suffix}`;
    }

    return formattedNumber;
  }
}
