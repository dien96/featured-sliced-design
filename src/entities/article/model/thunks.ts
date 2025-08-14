import { createAsyncThunk } from "@reduxjs/toolkit";
import { getArticleApi } from "../api";
import { toast } from "sonner";

export const getArticles = createAsyncThunk(
    "articles/getArticles",
    async (
        {
            page = 1,
            limit = 10,
            searchQuery = "",
        }: { page?: number, limit?: number, searchQuery?: string }, thunkAPI) => {
        try {
            const response = await getArticleApi({
                _page: page,
                _per_page: limit,
                title_like: searchQuery
            });

            return response;
        } catch (error: any) {
            toast.error(error.message);
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
