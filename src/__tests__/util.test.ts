import useCounter from "..";
import { defineProperties, throwError } from "../utils";

describe("throwError", () => {
  it("should return a function", () => {
    const error = throwError(useCounter, "count");
    expect(typeof error).toBe("function");
  });
  it("should throw an error", () => {
    const error = throwError(useCounter, "count");
    const message = "Counter should be rendered to access count property";
    expect(error).toThrow(Error(message));
  });
});

describe("defineProperties", () => {
  it("should amend a current property in an object", () => {
    const person = { name: "John", age: 1 };

    defineProperties(person, { name: { value: "Doe", writable: false } });

    expect(person.name).toBe("Doe");
    expect(person.name).not.toBe("John");
  });
});
