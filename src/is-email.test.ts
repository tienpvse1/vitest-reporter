import { isValidEmail } from "./is-email";

describe("isEmail", () => {
  it("should return true for valid email addresses", () => {
    expect(isValidEmail("test@gmail.com")).toBe(true);
  });
});
