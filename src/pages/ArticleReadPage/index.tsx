import type { RootState } from "@/app/stores/mainStore";
import { Button } from "@/shared/ui";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

export const ArticleReadPage = () => {
  const { id } = useParams<{ id: string }>();
  const article = useSelector((state: RootState) =>
    state.article.articles.find((a) => a.id === id)
  );

  if (!article?.id) {
    return <div className="p-6">Tidak ada artikel</div>;
  }
  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold">{article.title}</h1>
      <p className="text-muted-foreground">{article.body}</p>

      <Link to={`/articles/${id}/edit`}>
        <Button variant={"outline"}>Ubah</Button>
      </Link>
    </div>
  );
};
