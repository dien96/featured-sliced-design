import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addArticleApi,
  deleteArticleApi,
  editArticleApi,
  getArticleApi,
} from "../api";
import { toast } from "sonner";
import type { Article } from "./types";

export const getArticles = createAsyncThunk(
  "article/getArticles",
  async (
    {
      page = 1,
      limit = 10,
      searchQuery = "",
    }: { page?: number; limit?: number; searchQuery?: string },
    thunkAPI
  ) => {
    try {
      const response = await getArticleApi({
        _page: page,
        _per_page: limit,
        title_like: searchQuery,
      });

      return response;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const editArticle = createAsyncThunk(
  "article/editArticle",
  async (article: Article, thunkAPI) => {
    try {
      const updateArticle = await editArticleApi(article);
      toast.success("Artikel diperbarui");
      return updateArticle;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addArticle = createAsyncThunk(
  "article/addArticle",
  async (article: Omit<Article, "id">, thunkAPI) => {
    try {
      const newArticle = await addArticleApi(article);
      toast.success("Artikel ditambahkan");
      return newArticle;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteArticle = createAsyncThunk(
  "article/deleteArticle",
  async (id: string, thunkAPI) => {
    try {
      await deleteArticleApi(id);
      toast.success("Artikel dihapus");
      return id;
    } catch (error: any) {
      toast.error(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
