export interface Article {
  id: string;
  title: string;
  body: string;
}

export interface ArticleState {
  isLoading: boolean;
  articles: Article[];
  total: number;
  page: number;
  searchQuery: string;
}
