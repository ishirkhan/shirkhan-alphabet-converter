import { Khan } from "./khan";

const khan = new Khan();
const uStr = "شىرخاننىڭكىدىكىدەك";
const khanStr = "shirkhanningkidikidek";

describe("测试 khan 转换功能", () => {
  test("母语转换 khan", () => {
    const res = khan.convert(uStr);
    expect(res).toEqual(khanStr);
  });

  test("khan 换回母语", () => {
    const res = khan.forward(khanStr);
    expect(res).toEqual(uStr);
  });

  test("khan wh 字母测试", () => {
    const res = khan.forward("lewwhe");
    expect(res).toEqual("لەۋھە");
  });

  test("khan test 换回功能测试", () => {
    const markdown =
      "shirkhan isil /bu katak ichidiki mezmun czpeti saqlinidu 你好/";
    const res = khan.forwardText(markdown);
    expect(res).toEqual(
      "شىرخان ئىسىل bu katak ichidiki mezmun czpeti saqlinidu 你好"
    );
  });
});
