import { Khan as KhanConverter } from "./khan";
import { Uly as UlyConverter } from "./uly";
export declare function u2uly(word: string): string;
export declare function uly2u(word: string): string;
export declare function u2khan(word: string): string;
export declare function khan2u(word: string): string;
export declare function khanText2u(text: string): import("vfile").VFileValue;
export { KhanConverter, UlyConverter };
