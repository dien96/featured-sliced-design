import type { Article } from "./types";
import articleReducer, { setPage, setSearchQuery } from "./articleSlices";
import { getArticles, addArticle, editArticle, deleteArticle } from "./thunks";

export type { Article };
export {
  getArticles,
  addArticle,
  editArticle,
  deleteArticle,
  articleReducer,
  setPage,
  setSearchQuery,
};
