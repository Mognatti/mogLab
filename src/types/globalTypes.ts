import type { Timestamp } from "firebase/firestore";

export interface DisciplinesProps {
  title: string;
  description: string;
  articles?: ArticleProps[];
}

export interface ArticleProps {
  title: string;
  author: string;
  content: string;
  changed?: Timestamp;
  id?: string;
}
