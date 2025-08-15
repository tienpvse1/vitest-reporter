import { isValidEmail } from "./is-email";

describe("isEmail", () => {
  it("should return true for valid email addresses", () => {
    expect(isValidEmail("test@gmail.com")).toBe(true);
  });
  it("should return false for invalid email addresses", () => {
    expect(isValidEmail("testgmail.com")).toBe(false);
    expect(isValidEmail("test@.com")).toBe(false);
    expect(isValidEmail("test@com")).toBe(false);
    expect(isValidEmail("test@domain..com")).toBe(false);
  });
});
