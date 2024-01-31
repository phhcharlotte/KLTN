import * as Models from "@/models";

export default defineNuxtPlugin(() => {
  return {
    provide: {
      models: Models,
    },
  };
});
