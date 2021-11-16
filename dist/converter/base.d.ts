import type { ITableItem } from "shirkhan-alphabet-table";
import { Contract } from "./contract";
import type { ConvertType } from "./contract";
export declare class Base implements Contract {
    type: ConvertType;
    table: ITableItem[];
    constructor();
    orderedTable(): ITableItem[];
    getMap(): {
        [k: string]: string;
    };
    convert(uword: string): string;
    forward(word: string): string;
}
