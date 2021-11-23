import { u2khan, khan2u, khanText2u } from "./converter";

// console.log(u2khan("شىرخان"));
// console.log(khan2u("shirkhan"));

const markdown = `
# shirkhan aylandurghuchi
- |what is this| we |你好么终止符|
## watan watan
`;

console.log(khanText2u(markdown));
