import type { ITableItem } from "./types";
import { Contract } from "./contract";
import type { ConvertType } from "./contract";
export declare class Base implements Contract {
    table: ITableItem[];
    hemze: string;
    type: ConvertType;
    constructor(table: ITableItem[], hemze?: string);
    orderedTable(): ITableItem[];
    getMap(): {
        [k: string]: string;
    };
    fromUg(uword: string): string;
    toUg(word: string): string;
    /**
     * 基于retext的文本替换母语功能
     * @param text
     * @returns
     */
    toUgText(text: string): string;
}
