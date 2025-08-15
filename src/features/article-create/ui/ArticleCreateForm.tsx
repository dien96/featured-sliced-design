import { Button, Input, Textarea } from "@/shared/ui";
import { useArticleCreate } from "../model";

export const ArticleCreateForm = () => {
  const { title, body, setBody, setTitle, onSubmit } = useArticleCreate();

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Isi Artikel"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></Textarea>
      <Button type="submit">Buat</Button>
    </form>
  );
};
