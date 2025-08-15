import type { AppDispatch, RootState } from "@/app/stores/mainStore";
import { getArticles, setPage } from "@/entities/article/model";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export const useArticlePagination = () => {
  const dispatch: AppDispatch = useDispatch();

  const { page, total, isLoading, searchQuery } = useSelector(
    (state: RootState) => state.article
  );

  const canNext = page < Math.ceil(total / 10);
  const canPrev = page > 1;

  const handlePageChange = (newPage: number) => {
    if (newPage !== page) dispatch(setPage(newPage));
  };

  const onPrev = () => {
    if (canPrev) dispatch(setPage(page - 1));
  };

  const onNext = () => {
    if (canNext) dispatch(setPage(page + 1));
  };

  useEffect(() => {
    dispatch(getArticles({ page, searchQuery }));
  }, [dispatch, page, searchQuery]);

  return {
    page,
    canNext,
    canPrev,
    isLoading,
    total,
    handlePageChange,
    onPrev,
    onNext,
  };
};
