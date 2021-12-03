import type { ITableItem } from "./types";

export type ConvertType = keyof Pick<ITableItem, "khan" | "ug" | "uly">;

export interface Contract {
  type: ConvertType;
  table: ITableItem[];

  /**
   * 长度大到小排序的table
   * 备注:
   * 反向转换时需要从最长的组合开始替换，不然组合字符将被识别成2个字符，这回导致结果错误
   * 比如: shirkhan -> sh kh i r a n 类似于这种顺序
   */
  orderedTable(): ITableItem[];
  /**
   * 当前type类型的field 对应母语的 keyvalue map
   */
  getMap(): { [k: string]: string };
  /**
   * 吧母语内容转换成当前主导的形式
   * @param uword
   */
  fromUg(uword: string): string;
  /**
   * 当前主导形式的内容转换成母语
   * @param word
   */
  toUg(word: string): string;
  /**
   * 基于retext的文本替换母语功能
   * @param text
   * @returns
   */
  toUgText(text: string): string;
}
