import { isWord } from "./hw6";

describe("One or more words in the phrase", () => {
  it("It is some words", () => {
    expect(isWord("A text")).toBe("false");
  });

  it("It is a word", () => {
    expect(isWord("Word")).toBe("true");
  });
});
