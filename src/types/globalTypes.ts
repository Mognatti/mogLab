import type { Timestamp } from "firebase/firestore";

export interface DisciplinesProps {
  title: string;
  description: string;
  articles?: ArticleProps[];
  id: string;
}

export interface DisciplineNameAndId {
  id: string;
  title: string;
}

export interface ArticleProps {
  title: string;
  author: string;
  content: string;
  changed?: Timestamp;
  id?: string;
}
