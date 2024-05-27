import { convertMinutesToHoursMinutes } from "@/utils";

describe("convertMinutesToHoursMinutes", () => {
  it("should convert 0 minutes correctly", () => {
    expect(convertMinutesToHoursMinutes(0)).toBe("0h 0m");
  });

  it("should convert minutes less than 60 correctly", () => {
    expect(convertMinutesToHoursMinutes(59)).toBe("0h 59m");
  });

  it("should convert exactly 60 minutes correctly", () => {
    expect(convertMinutesToHoursMinutes(60)).toBe("1h 0m");
  });

  it("should convert more than 60 minutes correctly", () => {
    expect(convertMinutesToHoursMinutes(90)).toBe("1h 30m");
    expect(convertMinutesToHoursMinutes(150)).toBe("2h 30m");
  });

  it("should convert large number of minutes correctly", () => {
    expect(convertMinutesToHoursMinutes(12345)).toBe("205h 45m");
  });

  it("should handle edge cases correctly", () => {
    expect(convertMinutesToHoursMinutes(1)).toBe("0h 1m");
    expect(convertMinutesToHoursMinutes(1440)).toBe("24h 0m"); // 24 hours
  });
});
