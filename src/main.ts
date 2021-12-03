import { KhanConverter } from "./converter";
import table, { HEMZE } from "shirkhan-alphabet-table";
import { marked } from "marked";
import { replaceAll } from "./converter/util";

function khan2u(word: string) {
  return new KhanConverter(table as any, HEMZE).toUg(word);
}

function u2khan(word: string) {
  return new KhanConverter(table as any, HEMZE).fromUg(word);
}

function khanText2u(text: string) {
  return new KhanConverter(table as any, HEMZE).toUgText(text);
}

console.log(u2khan("شىرخان"));
console.log(khan2u("shirkhan"));

// console.log(khanText2u(markdown));
function showMarkdown(markdown: string) {
  markdown = khanText2u(markdown).toString();
  document.getElementById("result")!.innerHTML = marked.parse(markdown);
}

const markdownTextArea = document.getElementById("test") as HTMLTextAreaElement;

showMarkdown(markdownTextArea.value);

markdownTextArea.addEventListener("input", (e: any) =>
  showMarkdown(e.target.value)
);
console.log(replaceAll("hel?lo?", "?", "99"));
