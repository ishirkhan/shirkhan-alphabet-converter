export function escapeSpecialCharacters(specialChars: string) {
  const regex = /[\^\$\.\*\+\?\|\\\/\[\]\{\}\=\!\:\-\,]/gi;
  const match = specialChars.match(regex);
  if (match) {
    for (let item of match) {
      specialChars = specialChars.replace(
        new RegExp(`\\${item}`, "gi"),
        `\\${item}`
      );
    }
  }
  return specialChars;
}
/**
 * 给定字符串中的指定字符串替换成其他串
 * @param str 内容
 * @param target 需要被替换的串
 * @param replacement 要替换的串
 * @returns
 */
export function replaceAll(str: string, target: string, replacement: string) {
  target = escapeSpecialCharacters(target);
  return str.replace(new RegExp(target, "ig"), replacement);
}
