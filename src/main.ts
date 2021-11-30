import { u2khan, khan2u, khanText2u } from "./converter";
import { marked } from "marked";

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
