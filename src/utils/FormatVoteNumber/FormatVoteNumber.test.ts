import { FormatVoteNumber } from "./FormatVoteNumber";

describe("formatNumber", () => {
  it("should return the number as is if it is less than 1000", () => {
    expect(FormatVoteNumber(999)).toBe("999");
  });

  it("should format numbers between 1000 and 999999 with a K suffix", () => {
    expect(FormatVoteNumber(1000)).toBe("1.0K");
    expect(FormatVoteNumber(1658)).toBe("1.7K");
    expect(FormatVoteNumber(250450)).toBe("250.4K");
    expect(FormatVoteNumber(999999)).toBe("1000.0K");
  });

  it("should format numbers 1000000 and greater with an M suffix", () => {
    expect(FormatVoteNumber(1000000)).toBe("1.0M");
    expect(FormatVoteNumber(2500000)).toBe("2.5M");
    expect(FormatVoteNumber(12345678)).toBe("12.3M");
  });
});
