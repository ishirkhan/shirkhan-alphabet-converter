import { Base } from "./base";
import type { ConvertType } from "./contract";

import { retext } from "retext";
import { TextConverter } from "./retext-text-converter";

export class Khan extends Base {
  type: ConvertType = "khan";

  /**
   * 基于retext的文本替换母语功能
   * @param text
   * @returns
   */
  text2u(text: string) {
    return retext()
      .use(TextConverter, (word) => this.forward(word))
      .processSync(text).value;
  }
}
