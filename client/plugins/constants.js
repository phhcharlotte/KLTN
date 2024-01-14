import * as Constants from "@/constants";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      constants: Constants,
    },
  };
});
