import type { Timestamp } from "firebase/firestore";

export interface Disciplines {
  title: string;
  description: string;
  articles?: {
    author: string;
    changed: Timestamp;
    content: string;
    title: string;
  }[];
}
