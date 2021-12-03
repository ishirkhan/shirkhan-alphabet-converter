import { Uly } from "./uly";
import table, { HEMZE } from "shirkhan-alphabet-table";
const uly = new Uly(table as any, HEMZE);

const uStr = "شىرخاننېڭكىدىكىدەك";
const ulyStr = "shirxannëngkidikidek";

describe("测试 uly 转换功能", () => {
  test("母语转换 uly", () => {
    const res = uly.fromUg(uStr);
    expect(res).toEqual(ulyStr);
  });

  test("uly 换回母语", () => {
    const res = uly.toUg(ulyStr);
    expect(res).toEqual(uStr);
  });
});
