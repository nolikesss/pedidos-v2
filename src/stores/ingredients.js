import { defineStore } from "pinia";
import { breads, meats, optionals } from "./mockup/ingredients";

export const ingredientsStore = defineStore("ingredients", {
  state() {
    return {
      breads: breads,
      meats: meats,
      optionals: optionals,
    };
  },
  getters: {},
  actions: {},
});
