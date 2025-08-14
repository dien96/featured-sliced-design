import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { ArticleState } from "./types";
import { addArticle, getArticles, editArticle, deleteArticle } from "./thunks";

const initialState: ArticleState = {
  isLoading: false,
  articles: [],
  total: 0,
  page: 1,
  searchQuery: "",
};

const articleSlice = createSlice({
  name: "article",
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
      state.page = 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getArticles.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getArticles.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.articles = payload.data;
        state.total = payload.total;
      })
      .addCase(getArticles.rejected, (state) => {
        state.isLoading = false;
        state.articles = [];
      })
      .addCase(addArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(addArticle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.articles.push(payload);
      })
      .addCase(addArticle.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(editArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(editArticle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        const index = state.articles.findIndex((a) => a.id === payload.id);
        if (index !== -1) {
          state.articles[index] = payload;
          state.total++;
        }
      })
      .addCase(editArticle.rejected, (state) => {
        state.isLoading = false;
      })
      .addCase(deleteArticle.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteArticle.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.articles = state.articles.filter((a) => a.id !== payload);
        state.total--;
      })
      .addCase(deleteArticle.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { setPage, setSearchQuery } = articleSlice.actions;
export default articleSlice.reducer;
