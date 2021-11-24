import { visit } from "unist-util-visit";

import { BOUNDARY_SYMBOL } from "shirkhan-alphabet-table";

export interface Node {
  value: string;
  type: string;
  children: Node[];
}

export type convertCallback = (nodeValue: string) => string;

function handlePunctuationNode(node: Node) {
  if (node.type !== "PunctuationNode") return node;

  switch (node.value) {
    case "'": // 处理hemze 默认因单词首字母带hemze，这里去掉字符就能达到加hemze的效果
      node.value = "";
      break;
    case "?":
      node.value = "؟";
      break;
    case "？":
      node.value = "؟";
      break;
    case ",":
      node.value = "،";
      break;
    case "，":
      node.value = "،";
      break;
    case "(":
      node.value = "(";
      break;
    case ")":
      node.value = ")";
      break;
    default:
      break;
  }
  return node;
}

function convertNode(node: Node, converter?: convertCallback) {
  if (node.type === "WhiteSpaceNod") return node;

  handlePunctuationNode(node);

  if (node.type !== "WordNode") return node;

  node.children?.forEach((childNode) => {
    handlePunctuationNode(childNode);
    childNode.value = converter ? converter(childNode.value) : childNode.value;
  });

  return node;
}

export function TextConverter(converter?: convertCallback) {
  // 当遇到终止符时停止转换
  let stopConvert = false;

  return (tree: any) => {
    visit(tree, "SentenceNode", (node: Node) => {
      return node.children.forEach((childNode) => {
        if (
          childNode.type === "SymbolNode" &&
          childNode.value === BOUNDARY_SYMBOL
        ) {
          // 切换终止状态
          stopConvert = !stopConvert;
          childNode.value = "";
        }

        stopConvert || convertNode(childNode, converter);
      });
    });
  };
}
