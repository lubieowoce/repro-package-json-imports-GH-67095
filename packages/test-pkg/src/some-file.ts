import { helloSomething } from "#utils/some-thing.js";

export function somefile(): string {
  helloSomething();
  console.log("IN HERE");
  return "return from some file";
}
