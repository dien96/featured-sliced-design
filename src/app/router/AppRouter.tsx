import { ArticleEditPage } from "@/pages/ArticleEditPage";
import { ArticleReadPage } from "@/pages/ArticleReadPage";
import { HomePage } from "@/pages/HomePage";
import { LoginPage } from "@/pages/LoginPage";
import { ROUTES } from "@/shared/config";
import { Route, Routes } from "react-router-dom";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<HomePage />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.ARTICLE_READ} element={<ArticleReadPage />} />
      <Route path={ROUTES.ARTICLE_EDIT} element={<ArticleEditPage />} />
    </Routes>
  );
};
