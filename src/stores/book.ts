import { defineStore, acceptHMRUpdate } from "pinia";
import type { Book } from "@/interfaces/book";

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
    /**
     * Add a book to the collection
     * @param payload {Book}
     */
    add(payload: Book): Book {
      this.collection.unshift(payload);
      return payload;
    },
  },
});

// Hot Module Replacement
// https://pinia.vuejs.org/cookbook/hot-module-replacement.html
// make sure to pass the right store definition.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useBookStore, import.meta.hot));
}
