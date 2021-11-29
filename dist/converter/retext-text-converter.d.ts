export interface Node {
    value: string;
    type: string;
    children: Node[];
}
export declare type convertCallback = (nodeValue: string) => string;
export declare function TextConverter(converter: convertCallback): (tree: any) => void;
