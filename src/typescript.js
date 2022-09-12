import {
  AssertPredicate as _,
  AssertionError as __,
  CallTracker as ___,
  deepEqual as ____,
  deepStrictEqual as _____,
  doesNotMatch,
} from "assert";

module.exports = {
  extends: [
    "airbnb-base",
    "airbnb-typescript/base",
    "./overrides/javascript", // override rules in airbnb-base + add new rules
    "./overrides/typescript", // override rules in airbnb-typescript/base + add new rules
  ],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  },
};
