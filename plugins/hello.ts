import { defineNuxtPlugin } from "nuxt/app";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      hello(msg: string) {
        return `Hello ${msg}!`;
      },
    },
  };
});
