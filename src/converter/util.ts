/**
 * 给定字符串中的指定字符串替换成其他串
 * @param str 内容
 * @param target 需要被替换的串
 * @param replacement 要替换的串
 * @returns
 */
export function replaceAll(str: string, target: string, replacement: string) {
  return str.replace(new RegExp(target, "ig"), replacement);
}
