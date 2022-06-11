import { defineStore } from "pinia";
import type Book from "@/interfaces/book";

export const useBookStore = defineStore({
  id: "book",
  state: () => ({
    collection: <Book[]>[
      {
        id: 1,
        title: "Moby dick",
      },
    ],
  }),

  actions: {
    add(payload: Book) {
      this.collection.unshift(payload);
    },
  },
});
