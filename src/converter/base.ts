import type { ITableItem } from "./types";
import { Contract } from "./contract";
import type { ConvertType } from "./contract";

import { retext } from "retext";
import { TextConverter } from "./retext-text-converter";
import { replaceAll } from "./util";

export class Base implements Contract {
  type!: ConvertType;
  constructor(public table: ITableItem[], public hemze = "x") {}

  orderedTable(): ITableItem[] {
    return this.table.sort(
      (a: any, b: any) => b[this.type]?.length - a[this.type]?.length
    );
  }

  getMap(): { [k: string]: string } {
    const kvmap: { [k: string]: string } = {};
    this.orderedTable().forEach(
      (item) => (kvmap[item[this.type]] = item.uchar)
    );
    return kvmap;
  }

  fromUg(uword: string): string {
    Object.entries(this.getMap()).forEach(
      ([key, value]) => (uword = replaceAll(uword, value, key))
    );
    return uword;
  }

  toUg(word: string): string {
    Object.entries(this.getMap()).forEach(
      ([key, value]) => (word = replaceAll(word, key, value))
    );
    const volwes = this.table
      .filter((item) => item.volwes)
      .map((item) => item.uchar);

    return volwes.includes(word[0]) ? this.hemze + word : word;
  }

  /**
   * 基于retext的文本替换母语功能
   * @param text
   * @returns
   */
  toUgText(text: string) {
    return retext()
      .use(TextConverter as any, (word: string) => this.toUg(word))
      .processSync(text)
      .value.toString();
  }
}
