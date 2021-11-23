import table, { HEMZE } from "shirkhan-alphabet-table";
import type { ITableItem } from "shirkhan-alphabet-table";
import { Contract } from "./contract";
import type { ConvertType } from "./contract";

export class Base implements Contract {
  type!: ConvertType;
  table: ITableItem[];
  constructor() {
    this.table = table;
  }

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

  convert(uword: string): string {
    Object.entries(this.getMap()).forEach(
      ([key, value]) => (uword = uword.replaceAll(value, key))
    );
    return uword;
  }

  forward(word: string): string {
    Object.entries(this.getMap()).forEach(
      ([key, value]) => (word = word.replaceAll(key, value))
    );
    const volwes = this.table
      .filter((item) => item.volwes)
      .map((item) => item.uchar);

    return volwes.includes(word[0]) ? HEMZE + word : word;
  }
}
