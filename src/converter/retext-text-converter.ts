import { visit } from "unist-util-visit";

import { BOUNDARY_SYMBOL } from "shirkhan-alphabet-table";

export interface Node {
  value: string;
  type: string;
  children: Node[];
}

export type convertCallback = (nodeValue: string) => string;

// function handlePunctuationNode(node: Node) {
//   if (node.type !== "PunctuationNode") return node;

//   switch (node.value) {
//     case "'": // 处理hemze 默认因单词首字母带hemze，这里去掉字符就能达到加hemze的效果
//       node.value = "";
//       break;
//     case "?":
//       node.value = "؟";
//       break;
//     case "？":
//       node.value = "؟";
//       break;
//     case ",":
//       node.value = "،";
//       break;
//     case "，":
//       node.value = "،";
//       break;
//     case "(":
//       node.value = "(";
//       break;
//     case ")":
//       node.value = ")";
//       break;
//     default:
//       break;
//   }
//   return node;
// }

// function convertNode(node: Node, converter?: convertCallback) {
//   if (node.type === "WhiteSpaceNod") return node;

//   // handlePunctuationNode(node);

//   if (node.type !== "WordNode") return node;

//   node.children?.forEach((childNode) => {
//     // handlePunctuationNode(childNode);
//     childNode.value = converter ? converter(childNode.value) : childNode.value;
//   });

//   return node;
// }

let stopConvert = false;

function handleBoundaryNode(node: Node) {
  // 切换终止状态
  if (node.type === "PunctuationNode" && node.value === BOUNDARY_SYMBOL) {
    stopConvert = !stopConvert;
    node.value = "";
  }
}

function handleChildrenNode(node: Node, converter: convertCallback) {
  if (node.type === "WhiteSpaceNode") return node; // 空白不处理
  if (node.type === "PunctuationNode") handleBoundaryNode(node); // 分界符

  // 有value 而且需要转移的部分
  if (!stopConvert && node?.value) {
    node.value = converter(node.value);
  }

  // 没有孩子
  if (!node?.children) return node;

  node.children.forEach((childNode) => {
    handleChildrenNode(childNode, converter);
  });

  return node;
}

export function TextConverter(converter: convertCallback) {
  return (tree: any) => {
    visit(tree, "SentenceNode", (node: Node) => {
      handleChildrenNode(node, converter);
    });
  };
}
