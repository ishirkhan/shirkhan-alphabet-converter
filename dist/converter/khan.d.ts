import { Base } from "./base";
import type { ConvertType } from "./contract";
export declare class Khan extends Base {
    type: ConvertType;
    /**
     * 基于retext的文本替换母语功能
     * @param text
     * @returns
     */
    text2u(text: string): import("vfile").VFileValue;
}
