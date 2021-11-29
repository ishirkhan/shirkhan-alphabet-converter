import { u2khan, khan2u, khanText2u } from "./converter";

console.log(u2khan("شىرخان"));
console.log(khan2u("shirkhan"));

const markdown = `
# shirkhan isil
- isil
  - isil tu

/
Column A | Column B | Column C
---------|----------|---------
 /A1/ | B1 | C1
 A2 | B2 | C2
 A3 | /B3/ | C3
/
`;

console.log("------------text convert --------------");
console.log(khanText2u(markdown));
