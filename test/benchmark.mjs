import URLStateMachine from "../lib/index.js";
import WHATWG from "whatwg-url";
import benchmark from "cronometro";

await benchmark(
  {
    "URL"() {
      return new URL("/path/to/something?hello=world", "https://www.google.com");
    },
    "url-state-machine"() {
      return new URLStateMachine("/path/to/something?hello=world", "https://www.google.com");
    },
    "whatwg-url"() {
      return new WHATWG.URL("/path/to/something?hello=world", "https://www.google.com");
    },
  },
  { warmup: true },
);
