export interface Article {
  id: number;
  to: string;
  title: string;
  content: string;
}
export interface GeneticsPageProps {
  activePage: Article | undefined;
  setActivePage: React.Dispatch<React.SetStateAction<Article | undefined>>;
}
