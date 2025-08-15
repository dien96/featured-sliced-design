import { useSelector } from "react-redux";
import { useArticleList } from "../model";
import type { RootState } from "@/app/stores/mainStore";
import { Loader } from "lucide-react";
import { ArticleCard } from "@/entities/article/ui";
import { Link } from "react-router-dom";
import { Button } from "@/shared/ui";
import { DeleteArticleButton } from "@/features/article-delete/ui";

export const ArticleList = () => {
  const { articles, isLoading } = useArticleList();
  const { user } = useSelector((state: RootState) => state.user);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {articles.length === 0 ? (
        <p className="text-center">Tidak ada artikel</p>
      ) : (
        articles.map((article) => {
          return (
            <ArticleCard key={article.id} article={article}>
              {user?.id && (
                <>
                  <Link to={`/articles/${article.id}/edit`}>
                    <Button variant={"outline"}>Ubah</Button>
                  </Link>
                  <DeleteArticleButton id={article.id} />
                </>
              )}
            </ArticleCard>
          );
        })
      )}
    </div>
  );
};
