import { visit } from "unist-util-visit";

export interface Node {
  value: string;
  type: string;
  children: Node[];
}

export type convertCallback = (nodeValue: string) => string;

function convertNode(node: Node, converter?: convertCallback) {
  if (node.type === "WhiteSpaceNod") return node;
  if (node.type !== "WordNode") return node;

  node.children.forEach((childNode) => {
    childNode.value = converter ? converter(childNode.value) : childNode.value;
  });
  return node;
}

export function TextConverter(converter?: convertCallback) {
  // 当遇到终止符时停止转换
  let stopConvert = false;

  return (tree: any) => {
    visit(tree, "SentenceNode", (node: Node) =>
      node.children.forEach((childNode) => {
        if (childNode.type === "SymbolNode" && childNode.value === "|") {
          // 切换终止状态
          stopConvert = !stopConvert;
          childNode.value = "";
        }

        stopConvert || convertNode(childNode, converter);
      })
    );
  };
}
