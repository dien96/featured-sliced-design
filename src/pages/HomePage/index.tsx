import type { RootState } from "@/app/stores/mainStore";
import { ArticleCreateForm } from "@/features/article-create/ui";
import { ArticleList } from "@/widgets/articleList/ui";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const user = useSelector((state: RootState) => state.user.user);
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">Artikel-artikel</h1>

      {user && (
        <div className="border p-4 rounded-3xl shadow">
          <h2 className="text-xl font-semibold mb-2">Artikel Baru</h2>
          <ArticleCreateForm />
        </div>
      )}
      <ArticleList />
    </div>
  );
};
