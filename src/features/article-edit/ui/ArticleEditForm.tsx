import { Button, Input, Textarea } from "@/shared/ui";
import { useArticleEdit } from "../model";
import { Loader } from "lucide-react";

export const ArticleEditForm = () => {
  const { title, body, setBody, setTitle, onSubmit, isLoading } =
    useArticleEdit();

  if (isLoading) {
    return (
      <div className="p-4">
        <Loader />
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <Input
        placeholder="Judul"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Textarea
        placeholder="Text"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      ></Textarea>
      <Button type="submit">Ubah</Button>
    </form>
  );
};
